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
    categoryFilter.addEventListener("change", filterProducts);

}

/* ==========================================
        ADD TO CART BUTTON
========================================== */

const cartButtons = document.querySelectorAll(".add-cart");

if (cartButtons.length > 0) {

    cartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

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

            window.location.href = "product-details.html";

        });

    });

}