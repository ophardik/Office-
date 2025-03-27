/* global jQuery, WOW */
(function ($) {
    "use strict";

    // Function to initialize all components
    function initializeComponents() {
        console.log("Initializing components...");

        // Hide Spinner
        let spinnerElement = document.getElementById("spinner");
        if (spinnerElement) {
            spinnerElement.classList.remove("show");
        }

        // WOW.js Initialization
        if (typeof WOW === "function") {
            new WOW().init();
        }

        // Sticky Navbar
        let navbar = document.querySelector(".nav-bar");
        if (navbar) {
            window.addEventListener("scroll", function () {
                if (window.scrollY > 45) {
                    navbar.classList.add("sticky-top");
                } else {
                    navbar.classList.remove("sticky-top");
                }
            });
        }

        // Back to Top Button
        let backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
            window.addEventListener("scroll", function () {
                if (window.scrollY > 300) {
                    backToTop.style.display = "block";
                } else {
                    backToTop.style.display = "none";
                }
            });

            backToTop.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // Initialize Carousels
        if ($(".header-carousel").length) {
            $(".header-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 1,
                dots: true,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });
        }

        if ($(".testimonial-carousel").length) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 24,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsive: {
                    0: { items: 1 },
                    992: { items: 2 }
                }
            });
        }
    }

    // Wait until everything is fully loaded before initializing
    window.addEventListener("load", function () {
        console.log("Page fully loaded. Initializing components...");
        setTimeout(initializeComponents, 100); // Small delay to ensure styles are loaded
    });

})(jQuery);
