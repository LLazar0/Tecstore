function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.offsetTop;

    window.scrollTo ({
        top: aboutSectionTop,
        behavior: 'smooth'
    });
}

/* FAZER IMAGEM OLHAR PARA O CURSOR */

const imagem = document.getElementById('imagem');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const mouseY = e.clientY - container.getBoundingClientRect().top;
    const containerCenterX = container.offsetWidth / 2;
    const containerCenterY = container.offsetHeight / 2;
  
    // Calcula a inclinação na direção do cursor
    const tiltX = (mouseX - containerCenterX) / 10;
    const tiltY = (mouseY - containerCenterY) / 10;
  
    // Aplica a inclinação à imagem
    imagem.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
  });