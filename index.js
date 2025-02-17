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





// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Tab switching functionality
//     const serviceTab = document.querySelector('.tab-options .active');
//     const taxTab = document.querySelector('.tab-options button');
    
//     // Mobile carousel functionality
//     const serviceCards = document.querySelectorAll('.service-card');
//     const dots = document.querySelectorAll('.dot');
//     let currentCardIndex = 0;

//     // Initialize mobile view
//     if (window.innerWidth <= 768) {
//         updateCardVisibility();
//     }

//     // Handle tab switching
//     taxTab.addEventListener('click', function() {
//         window.location.href = 'tax.html';
//     });

//     // Mobile touch handling
//     let touchStartX = 0;
//     let touchEndX = 0;

//     const servicesContainer = document.querySelector('.services-container');
    
//     servicesContainer.addEventListener('touchstart', (e) => {
//         touchStartX = e.touches[0].clientX;
//     });

//     servicesContainer.addEventListener('touchend', (e) => {
//         touchEndX = e.changedTouches[0].clientX;
//         handleSwipe();
//     });

//     function handleSwipe() {
//         const swipeThreshold = 50;
//         const swipeLength = touchEndX - touchStartX;

//         if (Math.abs(swipeLength) > swipeThreshold) {
//             if (swipeLength > 0 && currentCardIndex > 0) {
//                 // Swipe right
//                 currentCardIndex--;
//             } else if (swipeLength < 0 && currentCardIndex < serviceCards.length - 1) {
//                 // Swipe left
//                 currentCardIndex++;
//             }
//             updateCardVisibility();
//         }
//     }

//     function updateCardVisibility() {
//         serviceCards.forEach((card, index) => {
//             card.style.display = index === currentCardIndex ? 'block' : 'none';
//         });
        
//         // Update dots
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentCardIndex);
//         });
//     }

//     // Handle dot clicks
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             currentCardIndex = index;
//             updateCardVisibility();
//         });
//     });

//     // Handle window resize
//     window.addEventListener('resize', () => {
//         if (window.innerWidth <= 768) {
//             updateCardVisibility();
//         } else {
//             // Reset for desktop view
//             serviceCards.forEach(card => card.style.display = 'block');
//         }
//     });
// });


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


// let startX;
// let currentX;
// let isDragging = false;
// const swipeContent = document.getElementById('partner-card');

// swipeContent.addEventListener('mousedown', (e) => {
//     startX = e.pageX;
//     isDragging = true;
// });

// swipeContent.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;
//     currentX = e.pageX;
//     const deltaX = currentX - startX;
//     swipeContent.style.transform = `translateX(${deltaX}px)`;
// });

// swipeContent.addEventListener('mouseup', () => {
//     isDragging = false;
//     swipeContent.style.transform = 'translateX(0)';
// });

// swipeContent.addEventListener('mouseleave', () => {
//     isDragging = false;
//     swipeContent.style.transform = 'translateX(0)';
// });


// document.querySelectorAll('.card button').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('More information coming soon!');
//     });
// });


//  // Simple touch detection for carousel
//  const carousel = document.querySelector('.carousel-inner');
//  let isDown = false;
//  let startX;
//  let scrollLeft;

//  carousel.addEventListener('mousedown', (e) => {
//      isDown = true;
//      startX = e.pageX - carousel.offsetLeft;
//      scrollLeft = carousel.scrollLeft;
//  });

//  carousel.addEventListener('mouseleave', () => {
//      isDown = false;
//  });

//  carousel.addEventListener('mouseup', () => {
//      isDown = false;
//  });

//  carousel.addEventListener('mousemove', (e) => {
//      if (!isDown) return;
//      e.preventDefault();
//      const x = e.pageX - carousel.offsetLeft;
//      const walk = (x - startX) * 2;
//      carousel.scrollLeft = scrollLeft - walk;
//  });

//  // Touch events
//  carousel.addEventListener('touchstart', (e) => {
//      isDown = true;
//      startX = e.touches[0].pageX - carousel.offsetLeft;
//      scrollLeft = carousel.scrollLeft;
//  });

//  carousel.addEventListener('touchend', () => {
//      isDown = false;
//  });

//  carousel.addEventListener('touchmove', (e) => {
//      if (!isDown) return;
//      e.preventDefault();
//      const x = e.touches[0].pageX - carousel.offsetLeft;
//      const walk = (x - startX) * 2;
//      carousel.scrollLeft = scrollLeft - walk;
//  });


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