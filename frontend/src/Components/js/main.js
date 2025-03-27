(function () {
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if (document.getElementById("spinner")) {
                document.getElementById("spinner").classList.remove("show");
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new window.WOW().init();

//     // Sticky Navbar
//     // window.addEventListener("scroll", function () {
//     //     if (window.scrollY > 45) {
//     //         document.querySelector(".nav-bar").classList.add("sticky-top");
//     //     } else {
//     //         document.querySelector(".nav-bar").classList.remove("sticky-top");
//     //     }
//     // });

//     // Back to top button
    
//     // window.addEventListener("scroll", function () {
//     //     if (window.scrollY > 300) {
//     //         document.querySelector(".back-to-top").style.display = "block";
//     //     } else {
//     //         document.querySelector(".back-to-top").style.display = "none";
//     //     }
//     // });

    document.querySelector(".back-to-top").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Header carousel
    window.jQuery(".header-carousel").owlCarousel({
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

    // Testimonials carousel
    window.jQuery(".testimonial-carousel").owlCarousel({
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

})();


