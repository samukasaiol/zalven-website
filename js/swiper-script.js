document.addEventListener("DOMContentLoaded", function() {

    // Carrossel de Parceiros (Logos)
    const swiperPartner = new Swiper('.swiperPartner', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 1, // Quase sem delay para um efeito contínuo
            disableOnInteraction: false,
        },
        speed: 4000, // Velocidade da transição
        freeMode: true,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });

    // Carrossel de Testemunhos
    const swiperTestimonial = new Swiper('.swiperTestimonial', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000, // Troca de slide a cada 5 segundos
            disableOnInteraction: false,
        },
        grabCursor: true,
        // Configurações para diferentes tamanhos de tela
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});