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

// ================== 2. MODAL DE VÍDEO (APENAS PARA VÍDEO LOCAL) ==================
const requestLoaders = document.querySelectorAll('.request-loader');
const modalOverlay = document.getElementById('modal-overlay');
const localVideoPlayer = document.getElementById('modal-local-video');
const localVideoSource = document.getElementById('modal-local-video-source');
const closeModalBtn = document.querySelector('.my-close');

if (requestLoaders.length > 0 && modalOverlay) {
    requestLoaders.forEach(button => {
        button.addEventListener('click', function() {
            // Pega o caminho do vídeo do atributo data-local-video
            const videoSrc = this.dataset.localVideo;
            
            if (videoSrc && localVideoPlayer) {
                // Define o caminho do vídeo, carrega e toca
                localVideoSource.src = videoSrc;
                localVideoPlayer.load();
                localVideoPlayer.play();
                
                // Mostra o pop-up
                modalOverlay.style.display = 'flex';
            }
        });
    });

    // Função para fechar o modal e parar o vídeo
    const closeModal = () => {
        if (localVideoPlayer) {
            localVideoPlayer.pause(); // Para o vídeo
            localVideoSource.src = ''; // Limpa a fonte
        }
        modalOverlay.style.display = 'none';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
}

}); // Fim do DOMContentLoaded