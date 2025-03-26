document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.animated-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
            // Add background and shadow when scrolling down
            header.classList.add('scrolled');
            document.querySelector('.scroll-to-top').style.display = 'block'; // Show button
        } else {
            // Remove background and shadow when at the top
            header.classList.remove('scrolled');
            document.querySelector('.scroll-to-top').style.display = 'none'; // Hide button
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            const target = event.target;
            if (target.tagName === 'A' && target.getAttribute('href') !== '#') {
                event.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = target.getAttribute('href');
                }, 500);
            }
        });
    });

    // Scroll to top functionality
    document.querySelector('.scroll-to-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextImage, 3000);

    // Course slider functionality
    const courseSlider = document.querySelector('.course-slider');
    const slides = courseSlider.querySelector('.slides');
    const slideImages = slides.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector('.course-slider .prev').addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slideImages.length - 1;
        showSlide(currentSlideIndex);
    });

    document.querySelector('.course-slider .next').addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex < slideImages.length - 1) ? currentSlideIndex + 1 : 0;
        showSlide(currentSlideIndex);
    });
});

document.querySelector('.search-btn').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
});