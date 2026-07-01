const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const title = document.getElementById('letter-title');
const buttonsContainer = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');
const catImg = document.getElementById('letter-cat');

// Función que calcula la nueva posición y mueve el botón
const moveNoButton = (e) => {
    // Evita el comportamiento por defecto en móviles (como hacer zoom al tocar rápido)
    if (e.type === 'touchstart') {
        e.preventDefault(); 
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

// Escuchamos tanto el ratón (PC) como el toque (Móvil)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// Lógica para cuando se da click en "YES" (se mantiene igual)
yesBtn.addEventListener('click', () => {
    title.innerText = 'Yippeeee!';
    buttonsContainer.style.display = 'none';
    noBtn.style.display = 'none'; 
    finalText.style.display = 'block';
    catImg.src = "https://media.tenor.com/rbHUnVkjloQAAAAj/cat-cute.gif"; 
});
