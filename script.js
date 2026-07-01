const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const title = document.getElementById('letter-title');
const buttonsContainer = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');
const catImg = document.getElementById('letter-cat');

// Lógica para que el botón "No" escape del mouse
noBtn.addEventListener('mouseover', () => {
    // Obtenemos los límites de la ventana para que no se salga de la pantalla
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // Generamos coordenadas aleatorias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Cambiamos el posicionamiento a 'fixed' para moverlo por toda la pantalla
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Lógica para cuando finalmente logra (o decide) presionar "Yes"
yesBtn.addEventListener('click', () => {
    // 1. Cambiar el título
    title.innerText = 'Yippeeee!';
    
    // 2. Ocultar los botones
    buttonsContainer.style.display = 'none';
    noBtn.style.display = 'none'; // Aseguramos que el "No" desaparezca si estaba flotando
    
    // 3. Mostrar el texto final
    finalText.style.display = 'block';
    
    // 4. (Opcional) Cambiar la imagen del gato a uno más feliz
    catImg.src = "https://media.tenor.com/rbHUnVkjloQAAAAj/cat-cute.gif"; 
});