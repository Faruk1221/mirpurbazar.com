/* =========================================
   MACHINERY SHOP - MAIN SCRIPT
   PRODUCT + SEARCH + CATEGORY + CART + DRAWER
   ========================================= */

/* =========================================
   TOAST NOTIFICATION (Add to Cart Feedback)
========================================= */
function injectToastStyles() {
    if (document.getElementById("toast-style")) return;
    const style = document.createElement("style");
    style.id = "toast-style";
    style.innerHTML = `
        .cart-toast {
            position: fixed;
            left: 50%;
            bottom: 90px;
            transform: translateX(-50%) translateY(20px);
            background: #16a34a;
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 6px 20px rgba(0,0,0,.2);
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.25s ease, transform 0.25s ease;
            pointer-events: none;
            max-width: 90%;
        }
        .cart-toast.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        .cart-toast .toast-check {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            color: #16a34a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            flex-shrink: 0;
        }
    `;
    document.head.appendChild(style);
}

let toastTimer = null;
function showAddToCartToast(productName) {
    injectToastStyles();

    let toast = document.getElementById("cart-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cart-toast";
        toast.className = "cart-toast";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<span class="toast-check">✓</span> "${productName}" কার্টে যোগ হয়েছে`;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

/* =========================================
   1. WHATSAPP DIRECT ORDER FUNCTION
========================================= */

function sendToWhatsApp() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("আপনার কার্ট খালি!");
        return;
    }

    const phoneNumber = "8801973317146"; // আপনার WhatsApp নম্বর
    const profile = getCustomerProfile(); // অ্যাকাউন্ট থেকে তথ্য নেওয়া

    let message = `🛒 *নতুন অর্ডার ডিটেইলস*\n`;
    message += `----------------------------------\n`;

    let totalPrice = 0;
    cart.forEach((item, index) => {
        const itemTotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);
        totalPrice += itemTotal;
        message += `${index + 1}. *${item.name}*\n   পরিমাণ: ${item.quantity} টি | দাম: ৳${itemTotal.toLocaleString()}\n`;
    });

    message += `----------------------------------\n`;
    message += `💰 *সর্বমোট মূল্য:* ৳${totalPrice.toLocaleString()}\n\n`;

    // অ্যাকাউন্ট তথ্য থাকলে তা মেসেজের নিচে যুক্ত হবে
    if (profile && profile.name) {
        message += `👤 *গ্রাহকের তথ্য (Customer Details):*\n`;
        message += `• নাম: ${profile.name}\n`;
        message += `• মোবাইল: ${profile.phone}\n`;
        if (profile.address) {
            message += `• ঠিকানা: ${profile.address}\n`;
        }
    } else {
        message += `⚠️ *গ্রাহকের তথ্য:* অ্যাকাউন্টে কোনো তথ্য সেভ করা নেই।\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
}

/* =========================================
   2. CART STATE MANAGEMENT
========================================= */

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cartData) {
    localStorage.setItem("cart", JSON.stringify(cartData));
}

/* =========================================
   3. ADD TO CART & SUGGESTION LOGIC
========================================= */

function addToCart(productId) {
    let cart = getCart();

    if (typeof products === "undefined" || !Array.isArray(products)) {
        console.error("products array unavailable!");
        return;
    }

    const product = products.find(p => String(p.id) === String(productId));

    if (!product) {
        console.error("Product not found!");
        return;
    }

    const existingIndex = cart.findIndex(item => String(item.id) === String(productId));
    const prodName = product.bnName || product.title || product.name || 'Product';

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: prodName,
            price: Number(product.price) || 0,
            image: product.image || '',
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
    showAddToCartToast(prodName);
}

function addToCartFromSuggestion(productId) {
    if (typeof products === "undefined" || !Array.isArray(products)) return;
    const product = products.find(p => String(p.id) === String(productId));
    if (!product) return;

    let cart = getCart();
    const existingIndex = cart.findIndex(item => String(item.id) === String(productId));

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.bnName || product.title || product.name || 'Product',
            price: Number(product.price) || 0,
            image: product.image || '',
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
}

/* =========================================
   4. CART COUNT UPDATE
========================================= */

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((total, item) => total + (Number(item.quantity) || 1), 0);

    const countBottom = document.getElementById("cart-count");
    const countHeader = document.getElementById("header-cart-count");
    
    if (countBottom) countBottom.innerText = totalQty;
    if (countHeader) countHeader.innerText = totalQty;

    document.querySelectorAll(".cart-count").forEach(element => {
        element.innerText = totalQty;
    });
}

/* =========================================
   5. REMOVE & QUANTITY MANAGEMENT
========================================= */

function removeFromCart(index) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);
    saveCart(cart);
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
}

function changeCartQuantity(index, change) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;

    cart[index].quantity = (Number(cart[index].quantity) || 1) + change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
}

/* =========================================
   6. CART TOTAL & DISPLAY (WITH PICTURES)
========================================= */

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
}

function showCart() {
    const cartContainer = document.getElementById("cart-items") || document.getElementById("cart-drawer-items");
    const totalElement = document.getElementById("cart-total");

    if (!cartContainer) return;

    const cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="no-result">
                🛒<br><br>
                আপনার Cart এখনো খালি।
                <br><br>
                <a href="index.html" style="color:#16a34a; font-weight:bold;">Shopping শুরু করুন →</a>
            </div>`;

        if (totalElement) totalElement.innerText = "৳ 0";
        return;
    }

    cart.forEach((product, index) => {
        const item = document.createElement("div");
        item.className = "cart-item";
        item.style.cssText = "padding: 10px 0; border-bottom: 1px solid #eee; display: flex; gap: 10px; align-items: center;";
        
        const qty = Number(product.quantity) || 1;
        const price = Number(product.price) || 0;
        const subtotal = price * qty;

        // ছবির লেআউট
        const imgHtml = `
            <div style="width: 50px; height: 50px; flex-shrink: 0; border-radius: 6px; overflow: hidden; background: #f3f4f6;">
                ${getProductImage(product)}
            </div>
        `;

        item.innerHTML = `
            ${imgHtml}
            <div style="flex-grow: 1;">
                <h3 style="font-size: 13px; margin: 0 0 4px 0;">${product.name}</h3>
                <p style="font-size: 11px; color: #555; margin: 0;">দাম: ${price > 0 ? '৳ ' + price.toLocaleString() : 'যোগাযোগ করুন'}</p>
                <div class="cart-quantity" style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
                    <button type="button" onclick="changeCartQuantity(${index}, -1)" style="width: 20px; height: 20px; border: 1px solid #ccc; background: #fff; cursor: pointer; line-height: 1;">−</button>
                    <strong style="font-size: 12px;">${qty}</strong>
                    <button type="button" onclick="changeCartQuantity(${index}, 1)" style="width: 20px; height: 20px; border: 1px solid #ccc; background: #fff; cursor: pointer; line-height: 1;">+</button>
                </div>
                <p style="font-size: 11px; margin: 0;">Subtotal: <strong>${price > 0 ? '৳ ' + subtotal.toLocaleString() : 'যোগাযোগ করুন'}</strong></p>
            </div>
            <button type="button" onclick="removeFromCart(${index})" style="color:red; background:none; border:none; cursor:pointer; font-size:14px; font-weight:bold;">✕</button>
        `;

        cartContainer.appendChild(item);
    });

    if (totalElement) {
        totalElement.innerText = "৳ " + getCartTotal().toLocaleString();
    }
}

function renderYouMayAlsoLike() {
    const container = document.getElementById("you-may-also-like-container");
    if (!container || typeof products === "undefined" || !Array.isArray(products)) return;

    const cart = getCart();
    const cartItemIds = cart.map(item => String(item.id));

    const suggestedProducts = products
        .filter(p => !cartItemIds.includes(String(p.id)))
        .sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));

    if (suggestedProducts.length === 0) {
        container.innerHTML = "<p style='font-size: 11px; color: #777;'>কোনো অতিরিক্ত পণ্য নেই।</p>";
        return;
    }

    container.innerHTML = suggestedProducts.map(product => `
        <div class="suggested-item" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #eee;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 38px; height: 38px; overflow: hidden; border-radius: 6px; background: #f3f4f6;">
                    ${getProductImage(product)}
                </div>
                <div>
                    <h5 style="font-size: 11px; margin: 0; color: #333; font-weight: bold;">${product.bnName || product.title || product.name}</h5>
                    <span style="font-size: 11px; color: #16a34a; font-weight: bold;">৳${Number(product.price).toLocaleString()}</span>
                </div>
            </div>
            <button type="button" onclick="addToCartFromSuggestion('${product.id}')" style="background: #16a34a; color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">
                + Add
            </button>
        </div>
    `).join("");
}

/* =========================================
   7. DRAWER TOGGLES (SIDE MENU & CART & ACCOUNT)
========================================= */

function toggleMenuDrawer() {
    const menuDrawer = document.getElementById("side-menu-drawer");
    if (menuDrawer) {
        menuDrawer.classList.toggle("open");
    }
}

function toggleCartDrawer() {
    const cartDrawer = document.getElementById("cart-drawer");
    if (cartDrawer) {
        cartDrawer.classList.toggle("open");
        if (cartDrawer.classList.contains("open")) {
            showCart();
            renderYouMayAlsoLike();
        }
    }
}

function toggleAccountDrawer() {
    const drawer = document.getElementById("account-drawer");
    if (drawer) {
        drawer.classList.toggle("open");
        if (drawer.classList.contains("open")) {
            renderAccountDrawer();
        }
    }
}

/* =========================================
   8. PRODUCT IMAGE HELPER
========================================= */

function getProductImage(product) {
    if (!product.image) return "⚙️";

    const image = String(product.image);

    if (
        image.includes("/") ||
        image.includes(".jpg") ||
        image.includes(".jpeg") ||
        image.includes(".png") ||
        image.includes(".webp") ||
        image.includes(".gif")
    ) {
        const displayName = product.bnName || product.name || product.title;
        return `
            <img
                src="${image}"
                alt="${displayName}"
                loading="lazy"
                style="width:100%; height:100%; object-fit:cover;"
                onerror="this.style.display='none';"
            >
        `;
    }

    return image;
}

/* =========================================
   9. PRODUCT CARD UI CREATOR
========================================= */

function createProductCard(product) {
    const displayName = product.bnName || product.title || product.name;
    const priceDisplay = product.price > 0 
        ? `৳ ${Number(product.price).toLocaleString()}` 
        : "দাম জানতে যোগাযোগ করুন";

    const oldPrice = (product.oldPrice && product.oldPrice > 0)
        ? `<div class="old-price">৳ ${Number(product.oldPrice).toLocaleString()}</div>`
        : "";

    const badge = product.badge
        ? `<span class="offer">${product.badge}</span>`
        : "";

    const rating = product.rating
        ? `<div class="rating">⭐⭐⭐⭐⭐ ${product.rating}</div>`
        : "";

    const page = product.page || `product.html?id=${product.id}`;
    const keywordsAttr = Array.isArray(product.keywords) ? product.keywords.join(" ").toLowerCase() : "";

    return `
        <div
            class="product"
            data-name="${String(product.name || product.title || "").toLowerCase()}"
            data-bnname="${String(product.bnName || "").toLowerCase()}"
            data-keywords="${keywordsAttr}"
            data-category="${String(product.category || "").toLowerCase()}"
        >
            <a href="${page}" class="product-image">
                ${badge}
                ${getProductImage(product)}
            </a>

            <div class="product-info">
                <h3>${displayName}</h3>
                ${rating}
                <div class="price">${priceDisplay}</div>
                ${oldPrice}
                <button type="button" onclick="addToCart('${product.id}')" class="view-product">Add to Cart</button>
            </div>
        </div>
    `;
}

/* =========================================
   10. LOAD & RENDER PRODUCTS
========================================= */

function loadProducts() {
    const container = document.getElementById("product-container") || document.querySelector(".products");

    if (!container) return;

    if (typeof products === "undefined" || !Array.isArray(products)) {
        container.innerHTML = `
            <div class="no-result">
                ❌ Product loading error.<br><br>
                products.js check করুন।
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(createProductCard).join("");
}

/* =========================================
   11. SEARCH & FILTER
========================================= */

function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const search = input.value.toLowerCase().trim();
    const productCards = document.querySelectorAll(".product");
    let visibleProducts = 0;

    productCards.forEach(function(product) {
        const name = product.getAttribute("data-name") || "";
        const bnName = product.getAttribute("data-bnname") || "";
        const keywords = product.getAttribute("data-keywords") || "";
        const text = product.innerText.toLowerCase();

        const match =
            search === "" ||
            name.includes(search) ||
            bnName.includes(search) ||
            keywords.includes(search) ||
            text.includes(search);

        if (match) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    showNoResult(visibleProducts === 0 && search !== "");
}

function setupSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    input.addEventListener("input", searchProducts);
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
}

function filterCategory(category) {
    const productCards = document.querySelectorAll(".product");
    const selectedCategory = String(category).toLowerCase().trim();
    let visibleProducts = 0;

    productCards.forEach(function(product) {
        const productCategory = String(product.getAttribute("data-category") || "").toLowerCase().trim();
        const match = selectedCategory === "all" || productCategory === selectedCategory;

        if (match) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    showNoResult(visibleProducts === 0);

    const input = document.getElementById("searchInput");
    if (input) input.value = "";
}

function showNoResult(show) {
    let message = document.getElementById("no-product-result");

    if (!show) {
        if (message) message.remove();
        return;
    }

    if (message) return;

    const container = document.getElementById("product-container") || document.querySelector(".products");
    if (!container) return;

    message = document.createElement("div");
    message.id = "no-product-result";
    message.className = "no-result";
    message.innerHTML = `
        🔍<br><br>
        কোনো Product পাওয়া যায়নি।<br>
        অন্য কিছু Search করুন।
    `;

    container.appendChild(message);
}

function focusSearch() {
    const input = document.getElementById("searchInput");
    setTimeout(function() {
        if (input) {
            input.focus();
            input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, 200);
}

function showAllProducts() {
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(function(product) {
        product.style.display = "";
    });

    showNoResult(false);

    const input = document.getElementById("searchInput");
    if (input) input.value = "";
}

/* =========================================
   12. INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
    setupSearch();
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
});

window.addEventListener("storage", function() {
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
});

/* =========================================
   13. CUSTOMER PROFILE (localStorage-based "Account")
========================================= */

function getCustomerProfile() {
    try {
        return JSON.parse(localStorage.getItem("customerProfile")) || null;
    } catch (e) {
        return null;
    }
}

function saveCustomerProfile(profile) {
    localStorage.setItem("customerProfile", JSON.stringify(profile));
}

function getOrderHistory() {
    try {
        return JSON.parse(localStorage.getItem("orders")) || [];
    } catch (e) {
        return [];
    }
}

function handleSaveProfile(event) {
    event.preventDefault();

    const name = document.getElementById("acc-name").value.trim();
    const phone = document.getElementById("acc-phone").value.trim();
    const address = document.getElementById("acc-address").value.trim();

    if (!name || !phone) {
        alert("অনুগ্রহ করে নাম ও মোবাইল নম্বর দিন।");
        return;
    }

    saveCustomerProfile({ name, phone, address });
    renderAccountDrawer();
}

function editProfile() {
    renderAccountDrawer(true);
}

function renderOrderHistoryHTML() {
    const orders = getOrderHistory();

    if (orders.length === 0) {
        return `<p style="font-size: 13px; color: #888; text-align: center; padding: 15px 0;">এখনো কোনো Order নেই।</p>`;
    }

    return orders.slice().reverse().map(order => {
        const itemCount = (order.items || []).reduce((sum, i) => sum + (Number(i.quantity) || 1), 0);
        return `
            <div style="border: 1px solid #eee; border-radius: 8px; padding: 10px 12px; margin-bottom: 8px;">
                <div style="display:flex; justify-content:space-between; font-size: 12px; font-weight:bold; color:#172033;">
                    <span>#${order.orderId}</span>
                    <span style="color:#16a34a;">৳ ${Number(order.grandTotal || 0).toLocaleString()}</span>
                </div>
                <div style="font-size: 11px; color:#777; margin-top:3px;">
                    ${order.date || ""} • ${itemCount} টি পণ্য
                </div>
            </div>
        `;
    }).join("");
}

function renderAccountDrawer(forceEdit) {
    const container = document.getElementById("account-drawer-body");
    if (!container) return;

    const profile = getCustomerProfile();

    if (!profile || forceEdit) {
        container.innerHTML = `
            <p style="font-size: 12px; color: #888; margin-bottom: 12px;">
                একবার তথ্য দিলে পরবর্তী Order-এ আবার লিখতে হবে না।
            </p>
            <form onsubmit="handleSaveProfile(event)">
                <div style="margin-bottom: 10px;">
                    <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">নাম *</label>
                    <input type="text" id="acc-name" value="${profile ? escapeHTMLAttr(profile.name) : ''}" placeholder="আপনার নাম" style="width:100%; padding:9px; border:1px solid #ddd; border-radius:6px; font-size:13px;">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">মোবাইল নম্বর *</label>
                    <input type="tel" id="acc-phone" value="${profile ? escapeHTMLAttr(profile.phone) : ''}" placeholder="০১৭xxxxxxxx" style="width:100%; padding:9px; border:1px solid #ddd; border-radius:6px; font-size:13px;">
                </div>
                <div style="margin-bottom: 14px;">
                    <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">ঠিকানা</label>
                    <input type="text" id="acc-address" value="${profile ? escapeHTMLAttr(profile.address) : ''}" placeholder="জেলা, থানা, এলাকা" style="width:100%; padding:9px; border:1px solid #ddd; border-radius:6px; font-size:13px;">
                </div>
                <button type="submit" style="width:100%; background:#16a34a; color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; font-size:14px; cursor:pointer;">
                    Save করুন
                </button>
            </form>
        `;
        return;
    }

    container.innerHTML = `
        <div style="background:#f0fdf4; border:1px solid #dcfce7; border-radius:10px; padding:14px; margin-bottom:16px;">
            <div style="font-weight:bold; font-size:15px; color:#172033;">${profile.name}</div>
            <div style="font-size:13px; color:#555; margin-top:3px;">📱 ${profile.phone}</div>
            ${profile.address ? `<div style="font-size:13px; color:#555; margin-top:3px;">📍 ${profile.address}</div>` : ""}
            <button type="button" onclick="editProfile()" style="margin-top:10px; background:none; border:1px solid #16a34a; color:#16a34a; padding:6px 12px; border-radius:6px; font-size:12px; font-weight:bold; cursor:pointer;">
                ✎ তথ্য পরিবর্তন করুন
            </button>
        </div>

        <h4 style="font-size: 13px; color: #16a34a; margin-bottom: 10px; text-transform: uppercase;">📦 আগের Order সমূহ</h4>
        ${renderOrderHistoryHTML()}
    `;
}

function escapeHTMLAttr(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
          }
