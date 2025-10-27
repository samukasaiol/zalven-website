// js/script.js (VERSÃO SIMPLIFICADA)

document.addEventListener("DOMContentLoaded", function() {

    // ANIMAÇÃO AO ROLAR
    const animatedBoxes = document.querySelectorAll('.animate-box');
    if (animatedBoxes.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClass = entry.target.dataset.animate || 'animate__fadeInUp';
                    entry.target.classList.add('animate__animated', animationClass);
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedBoxes.forEach(box => {
            box.style.opacity = 0;
            observer.observe(box);
        });
    }

    // js/script.js

// ================== 2. MODAL DE VÍDEO (PARA YOUTUBE) ==================
const requestLoaders = document.querySelectorAll('.request-loader');
const modalOverlay = document.getElementById('modal-overlay');
const videoFrame = document.getElementById('my-video-frame');
const closeModalBtn = document.querySelector('.my-close');

if (requestLoaders.length > 0 && modalOverlay) {
    requestLoaders.forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = this.dataset.video;
            if (videoSrc && videoFrame) {
                videoFrame.src = videoSrc;
                modalOverlay.style.display = 'flex';
            }
        });
    });

    const closeModal = () => {
        if (videoFrame) videoFrame.src = '';
        modalOverlay.style.display = 'none';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
}

}); // Fim do DOMContentLoaded