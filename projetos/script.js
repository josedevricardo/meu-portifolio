// Espera o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
    const headerText = "< José Ricardo Programador FullStack />"; // Texto desejado
    const typingHeader = document.getElementById('typing-header');

    // Substitui o texto pelo texto animado
    typingHeader.innerHTML = '<span id="animated-text" class="typing-animation"></span>';

    const animatedText = document.getElementById('animated-text');

    let currentIndex = 0;
    const typingSpeed = 100; // Velocidade da digitação (em milissegundos)

    function typeNextLetter() {
        if (currentIndex < headerText.length) {
            animatedText.textContent += headerText[currentIndex];
            currentIndex++;
            setTimeout(typeNextLetter, typingSpeed);
        } else {
            // Remova a classe de animação após a digitação completa
            animatedText.classList.remove('typing-animation');
        }
    }

    // Iniciar a animação de digitação
    typeNextLetter();
});



var swiper = new Swiper('.swiper-container', {
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
        delay: 2500, // Tempo de transição entre os slides (em milissegundos)
        disableOnInteraction: false, // Permite que o carrossel continue mesmo se o usuário interagir com ele
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        
        // Validação dos campos do formulário (pode ser mais elaborada)
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        // Redirecionamento para o cliente de e-mail padrão
        window.location.href = "mailto:josericardoprogramador@mail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
    });
});


document.querySelector('.btn-abrir-menu2').addEventListener('click', function() {
    document.querySelector('.menu-hamburguer2').style.left = '0';
});

document.querySelector('.btn-fechar2').addEventListener('click', function() {
    document.querySelector('.menu-hamburguer2').style.left = '-250px';
});

