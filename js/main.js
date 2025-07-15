// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loader Animation
    const loaderAnimation = gsap.timeline();
    
    loaderAnimation
        .from('.loader-title', {
            scale: 0.8,
            duration: 1,
            ease: 'power3.out'
        })
        .to('.loader-container', {
            opacity: 0,
            duration: 0.8,
            delay: 2, // Increased delay to show the animation longer
            onComplete: function() {
                document.querySelector('.loader-container').style.display = 'none';
                // Start page animations after loader is gone
                initPageAnimations();
            }
        });
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Product Sliders
    initProductSliders();
    
    // Image Viewer Modal
    initImageViewer();
});

// Initialize Page Animations
function initPageAnimations() {
    // Hero Section Animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-content h1', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-content p', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-content .btn', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-image img', {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            ease: 'back.out(1.7)'
        }, '-=1');
    
    // Parallax Effect for Hero Image
    gsap.to('.hero-image img', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        scale: 1.1,
        ease: 'none'
    });
    
    // ISI Section Animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.isi-section',
            start: 'top 80%'
        }
    })
    .from('.isi-text h2', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.isi-text p', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.isi-text .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.isi-image img', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)'
    }, '-=1');
    
    // Parallax Effect for ISI Image
    gsap.to('.isi-image img', {
        scrollTrigger: {
            trigger: '.isi-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -50,
        ease: 'none'
    });
    
    // Export Section Animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.export-section',
            start: 'top 80%'
        }
    })
    .from('.export-text h2', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.export-text p', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.export-text .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.export-image img', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)'
    }, '-=1');
    
    // Parallax Effect for Export Image
    gsap.to('.export-image img', {
        scrollTrigger: {
            trigger: '.export-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -50,
        ease: 'none'
    });
    
    // Section Titles Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Product Category Titles Animation
    gsap.utils.toArray('.product-category h3').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Product Cards Animation
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Applications Cards Animation
    gsap.utils.toArray('.application-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Values Cards Animation
    gsap.utils.toArray('.value-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Download Section Animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.download-section',
            start: 'top 80%'
        }
    })
    .from('.download-content h2', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.download-content p', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.download-content .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6');
    
    // Text Reveal Animation
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleClass: {targets: text, className: 'active'}
            }
        });
    });
    
    // Button Reveal Animation
    gsap.utils.toArray('.reveal-btn').forEach(btn => {
        gsap.to(btn, {
            scrollTrigger: {
                trigger: btn,
                start: 'top 85%',
                toggleClass: {targets: btn, className: 'active'}
            }
        });
    });
}

// Initialize Product Sliders
function initProductSliders() {
    const sliders = [
        { wrapper: '.boards-slider', container: '.boards-slider' },
        { wrapper: '.tiles-slider', container: '.tiles-slider' },
        { wrapper: '.powder-slider', container: '.powder-slider' }
    ];
    
    // Handle window resize to ensure proper slider behavior
    window.addEventListener('resize', function() {
        // Recalculate slider dimensions when window is resized
        sliders.forEach(slider => {
            const container = document.querySelector(slider.container);
            if (!container) return;
            
            // Reset scroll position to prevent layout issues
            const sliderParent = container.closest('.product-slider');
            const sliderContainer = sliderParent.querySelector('.slider-container');
            
            // Ensure visible card is properly positioned after resize
            const firstVisibleCardIndex = Math.round(sliderContainer.scrollLeft / sliderContainer.clientWidth);
            if (firstVisibleCardIndex > 0) {
                // Smooth scroll to the current visible card
                setTimeout(() => {
                    const cards = container.querySelectorAll('.product-card');
                    if (cards.length > 0 && firstVisibleCardIndex < cards.length) {
                        const card = cards[firstVisibleCardIndex];
                        sliderContainer.scrollLeft = card.offsetLeft - sliderContainer.offsetLeft;
                    }
                }, 100);
            }
        });
    });
    
    sliders.forEach(slider => {
        const container = document.querySelector(slider.container);
        if (!container) return;
        
        // Find the slider's container and controls
        const sliderParent = container.closest('.product-slider');
        const sliderContainer = sliderParent.querySelector('.slider-container');
        const prevBtn = sliderParent.querySelector('.prev-btn');
        const nextBtn = sliderParent.querySelector('.next-btn');
        
        // Calculate scroll amount based on device width
        // For mobile, scroll one card at a time
        function getScrollAmount() {
            // Get the width of a single card plus its margin
            const cards = container.querySelectorAll('.product-card');
            if (cards.length === 0) return sliderContainer.clientWidth / 2;
            
            const card = cards[0];
            const cardStyle = window.getComputedStyle(card);
            const cardWidth = card.offsetWidth;
            const cardMarginLeft = parseInt(cardStyle.marginLeft) || 0;
            const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
            const cardTotalWidth = cardWidth + cardMarginLeft + cardMarginRight;
            
            // On mobile (width <= 768px), scroll one card at a time
            if (window.innerWidth <= 768) {
                return cardTotalWidth;
            } else {
                // On desktop, scroll two cards at a time
                return Math.min(sliderContainer.clientWidth / 2, cardTotalWidth * 2);
            }
        }
        
        // Previous button click - scroll left
        prevBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Next button click - scroll right
        nextBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Enable manual horizontal scrolling with mouse drag
        let isDown = false;
        let startX;
        let scrollLeft;
        
        sliderContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderContainer.style.cursor = 'grabbing';
            startX = e.pageX - sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            isDown = false;
            sliderContainer.style.cursor = 'grab';
        });
        
        sliderContainer.addEventListener('mouseup', () => {
            isDown = false;
            sliderContainer.style.cursor = 'grab';
        });
        
        sliderContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            sliderContainer.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile devices
        sliderContainer.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
            // Don't prevent default to allow page scrolling
        }, { passive: true });
        
        sliderContainer.addEventListener('touchend', () => {
            isDown = false;
        });
        
        sliderContainer.addEventListener('touchcancel', () => {
            isDown = false;
        });
        
        sliderContainer.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // Reduced multiplier for more precise control
            sliderContainer.scrollLeft = scrollLeft - walk;
            // Only prevent default horizontal scrolling, allow vertical scrolling
            if (Math.abs(x - startX) > 10) { // Only if significant horizontal movement
                e.preventDefault();
            }
        }, { passive: false });
        
        // Set initial cursor style
        sliderContainer.style.cursor = 'grab';
    });
}

// Initialize Image Viewer
function initImageViewer() {
    const cardImages = document.querySelectorAll('.card-image');
    const modal = document.querySelector('.image-viewer-modal');
    const modalImage = document.querySelector('.modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    cardImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = this.querySelector('img');
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modal.style.display = 'flex';
            
            // Animate modal opening
            gsap.fromTo(modalImage, 
                { opacity: 0, scale: 0.8 }, 
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
            );
        });
    });
    
    closeModal.addEventListener('click', function() {
        // Animate modal closing
        gsap.to(modalImage, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: function() {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            gsap.to(modalImage, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: function() {
                    modal.style.display = 'none';
                }
            });
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        // Calculate navbar height for offset
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 100;
        
        // Smooth scroll to target with improved offset
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - 20, // Additional 20px padding
            behavior: 'smooth'
        });
        
        // Ensure mobile scrolling works properly
        if (window.innerWidth <= 768) {
            // Force layout recalculation to ensure smooth scrolling on mobile
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
});