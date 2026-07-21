/* ==========================================
        FLASH SALE COUNTDOWN
========================================== */

const countdown = document.getElementById("countdown");

if (countdown) {

    let hours = 24;
    let minutes = 0;
    let seconds = 0;

    setInterval(function () {

        if (seconds > 0) {

            seconds--;

        } else {

            if (minutes > 0) {

                minutes--;
                seconds = 59;

            } else {

                if (hours > 0) {

                    hours--;
                    minutes = 59;
                    seconds = 59;

                }

            }

        }

        countdown.innerHTML =
            String(hours).padStart(2, '0') +
            " : " +
            String(minutes).padStart(2, '0') +
            " : " +
            String(seconds).padStart(2, '0');

    }, 1000);

}

/* ==========================================
        BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        // GA4 Event
        gtag("event", "back_to_top_click", {
            button_name: "Back To Top"
        });

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================
        PRODUCT SEARCH & FILTER
========================================== */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

if (searchInput && categoryFilter) {

    const products = document.querySelectorAll(".product-item");

    function filterProducts() {

        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        // GA4 Search Event
        gtag("event", "search", {
            search_term: searchText
        });

        products.forEach(function (product) {

            const productName = product.querySelector("h5").textContent.toLowerCase();
            const productCategory = product.dataset.category;

            const matchesSearch = productName.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                productCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    }

    searchInput.addEventListener("keyup", filterProducts);

    categoryFilter.addEventListener("change", function () {

        gtag("event", "category_filter", {
            category: categoryFilter.value
        });

        filterProducts();

    });

}

/* ==========================================
        ADD TO CART BUTTON
========================================== */

const cartButtons = document.querySelectorAll(".add-cart");

if (cartButtons.length > 0) {

    cartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const productName =
                button.closest(".product-item")
                ?.querySelector("h5")
                ?.textContent || "Unknown Product";

            // GA4 Add to Cart Event
            gtag("event", "add_to_cart", {

                currency: "INR",
                value: 1,

                items: [{
                    item_name: productName
                }]

            });

            alert("✅ Product added to cart!");

        });

    });

}

/* ==========================================
        VIEW DETAILS BUTTON
========================================== */

const detailButtons = document.querySelectorAll(".view-details");

if (detailButtons.length > 0) {

    detailButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const productName =
                button.closest(".product-item")
                ?.querySelector("h5")
                ?.textContent || "Unknown Product";

            // GA4 View Item Event
            gtag("event", "view_item", {

                currency: "INR",

                items: [{
                    item_name: productName
                }]

            });

            window.location.href = "product-details.html";

        });

    });

}