document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a, .nav-links button').forEach(n => {
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".cards-container");
    let isDragging = false, startX, scrollLeft;

    // Mouse Events
    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => isDragging = false);
    carousel.addEventListener("mouseup", () => isDragging = false);

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Adjust speed
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch Events for Mobile
    carousel.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("touchend", () => isDragging = false);
    carousel.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".services-container");
    const dots = document.querySelectorAll(".dot");

    function switchSection(target) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Show selected section
        document.querySelector(`.services-container.${target}`).classList.add("active");

        // Update tab highlight
        tabs.forEach(tab => {
            tab.classList.toggle("active", tab.dataset.target === target);
        });

        // Update dots
        dots.forEach(dot => {
            dot.classList.toggle("active", dot.dataset.target === target);
        });
    }

    // Tab Click Event
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.dataset.target;
            switchSection(target);
        });
    });

    // Dot Click Event
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            const target = this.dataset.target;
            switchSection(target);
        });
    });

    // Default Load
    switchSection("product");
});





document.addEventListener('DOMContentLoaded', function () {
    const productTab = document.getElementById('productTab');
    const taxTab = document.getElementById('taxTab');
    const servicesContainer = document.getElementById('servicescontainer');
    const servicesContainer2 = document.getElementById('servicescontainer2');
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');

    function showServicesContainer() {
        servicesContainer.style.display = 'flex';
        servicesContainer2.style.display = 'none';

        productTab.classList.add('active');
        taxTab.classList.remove('active');

        dot1.classList.add('active');
        dot2.classList.remove('active');

        checkScreenSize();
    }

    function showServicesContainer2() {
        servicesContainer.style.display = 'none';
        servicesContainer2.style.display = 'flex';

        taxTab.classList.add('active');
        productTab.classList.remove('active');

        dot2.classList.add('active');
        dot1.classList.remove('active');

        checkScreenSize();
    }

    productTab.addEventListener('click', showServicesContainer);
    taxTab.addEventListener('click', showServicesContainer2);
    dot1.addEventListener('click', showServicesContainer);
    dot2.addEventListener('click', showServicesContainer2);

    function enableSwipe(container) {
        const cards = container.querySelectorAll('.service-card');
        const totalCards = cards.length;
        let currentIndex = 0;
        let touchStartX = 0;
        let touchEndX = 0;

        function updateSlide() {
            cards.forEach((card, index) => {
                card.style.display = index === currentIndex ? 'block' : 'none';
            });
        }

        container.addEventListener('touchstart', function (event) {
            touchStartX = event.touches[0].clientX;
        });

        container.addEventListener('touchmove', function (event) {
            touchEndX = event.touches[0].clientX;
        });

        container.addEventListener('touchend', function () {
            let swipeDistance = touchStartX - touchEndX;

            if (swipeDistance > 50 && currentIndex < totalCards - 1) {
                currentIndex++; // Swipe left
            } else if (swipeDistance < -50 && currentIndex > 0) {
                currentIndex--; // Swipe right
            }

            updateSlide();
        });

        updateSlide();
    }

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            // Desktop - Show all cards
            document.querySelectorAll('.services-container').forEach(container => {
                container.querySelectorAll('.service-card').forEach(card => {
                    card.style.display = 'block';
                });
            });
        } else {
            // Mobile - Enable swipe
            enableSwipe(servicesContainer);
            enableSwipe(servicesContainer2);
        }
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);


   
});

// dot for about
document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards-container");
    const dots = document.querySelectorAll(".dot");

    function updateActiveDot() {
        const cards = document.querySelectorAll(".card");
        let scrollLeft = cardsContainer.scrollLeft;
        let cardWidth = cards[0].offsetWidth;
        let activeIndex = Math.round(scrollLeft / cardWidth); // Calculate which card is in view

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
        });
    }

    // Listen for scroll events on the carousel
    cardsContainer.addEventListener("scroll", updateActiveDot);
});





// blog caarosaul
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector(".blog-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    blogContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        blogContainer.classList.add("active");
        startX = e.pageX - blogContainer.offsetLeft;
        scrollLeft = blogContainer.scrollLeft;
    });

    blogContainer.addEventListener("mouseleave", () => {
        isDown = false;
        blogContainer.classList.remove("active");
    });

    blogContainer.addEventListener("mouseup", () => {
        isDown = false;
        blogContainer.classList.remove("active");
    });

    blogContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - blogContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        blogContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    blogContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    blogContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > 50) {
            blogContainer.scrollBy({ left: -300, behavior: "smooth" }); // Swipe Left
        } else if (swipeDistance < -50) {
            blogContainer.scrollBy({ left: 300, behavior: "smooth" }); // Swipe Right
        }
    }
});
