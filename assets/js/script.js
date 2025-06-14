document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Carousel functionality
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentIndex = 0;
    let slideWidth = 0; // Akan dihitung saat pertama kali dimuat

    // Fungsi untuk menggeser slide
    function goToSlide(index) {
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
            currentIndex = index;
        }
    }

    // Fungsi untuk slide berikutnya
    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // Kembali ke slide pertama
        }
    }

    // Fungsi untuk slide sebelumnya
    function prevSlide() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(slides.length - 1); // Kembali ke slide terakhir
        }
    }

    // Event listeners untuk tombol navigasi carousel
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }

    // Auto slide (opsional, uncomment untuk mengaktifkan)
    // let autoSlideInterval;
    // function startAutoSlide() {
    //     autoSlideInterval = setInterval(nextSlide, 5000); // Ganti 5000 dengan interval (ms) yang Anda inginkan
    // }
    // startAutoSlide(); // Mulai auto slide saat halaman dimuat

    // Hentikan auto slide saat mouse masuk ke carousel, dan mulai lagi saat keluar
    // const carouselWrapper = document.querySelector('.carousel-wrapper');
    // if (carouselWrapper) {
    //     carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    //     carouselWrapper.addEventListener('mouseleave', startAutoSlide);
    // }


    // Update slide width on window resize for responsiveness
    window.addEventListener('resize', () => {
        // Perbarui lebar slide berdasarkan lebar aktual slidesContainer
        if (slidesContainer) {
            slideWidth = slidesContainer.offsetWidth;
            goToSlide(currentIndex); // Sesuaikan posisi slide saat ini
        }
    });

    // Inisialisasi carousel saat halaman dimuat untuk memastikan posisi awal yang benar
    // Ini juga akan menghitung slideWidth pertama kali
    if (slidesContainer) {
        slideWidth = slidesContainer.offsetWidth;
        goToSlide(0); // Pastikan slide pertama terlihat
    }
});