// ==========================================
// 1. Efeito de Digitação no Header
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const headerText = "< José Ricardo Programador FullStack />";
    const typingHeader = document.getElementById('typing-header');

    if (!typingHeader) return;

    typingHeader.innerHTML = '<span id="animated-text" class="typing-animation"></span>';
    const animatedText = document.getElementById('animated-text');

    let currentIndex = 0;
    const typingSpeed = 100; // Milissegundos por caractere

    function typeNextLetter() {
        if (currentIndex < headerText.length) {
            animatedText.textContent += headerText[currentIndex];
            currentIndex++;
            setTimeout(typeNextLetter, typingSpeed);
        } else {
            animatedText.classList.remove('typing-animation');
        }
    }

    typeNextLetter();
});

// ==========================================
// 2. Configuração do Swiper Carousel
// (Nota: Se usar Swiper v7+, verifique se a classe no HTML é '.swiper' em vez de '.swiper-container')
// ==========================================
const swiperContainer = document.querySelector('.swiper-container') || document.querySelector('.swiper');
if (swiperContainer) {
    var swiper = new Swiper(swiperContainer, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// ==========================================
// 3. Validação e Envio do Formulário (Mailto)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var subject = document.getElementById("subject").value.trim();
            var message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            
            // Organizando o corpo do e-mail para incluir remetente e mensagem formatados
            var emailBody = `Nome: ${name}%0D%0A2E-mail: ${email}%0D%0A%0D%0AMensagem:%0D%0A${message}`;
            
            window.location.href = `mailto:josericardoprogramador@mail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
        });
    }
});

// ==========================================
// 4. Controle do Menu Hambúrguer (Mobile)
// ==========================================
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-hamburguer');
let overlay = document.getElementById('overlay-menu');

if (btnMenu && menu && overlay) {
    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
    });

    // Fecha o menu ao clicar em links internos ou no overlay
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
        });
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
}