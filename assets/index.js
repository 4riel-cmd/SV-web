document.addEventListener("DOMContentLoaded", function() {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const btnTalvez = document.getElementById("btnTalvez");
    const titulo = document.querySelector(".titulo");
    const mainGif = document.getElementById("mainGif");

    const mensajesTalvez = [
        "¿Qué te parece si lo piensas un poco más?",
        "No estás segura, ¿verdad? ¡Tómate tu tiempo!",
        "Una decisión difícil, ¿eh? ¡Reflexiona un poco más!",
        "No te preocupes, puedes pensarlo con calma.",
        "Es importante, tómate tu tiempo para decidir.",
        "Dios mío Machupichu déjate querer."
      ];

  
    // Array de GIFs para la reacción "Tal vez"
    const gifsTalvez = [
      "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
      "media/Molang_ Happiness is Here! _ Line Sticker.gif",
      "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif",
      "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif",
      "media/Bear Peter & Rabbit.gif",
      "/media/molangtite.gif"
    ];
      
    function obtenerElementoAleatorio(array) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
    }

    btnSi.addEventListener("click", function() {
      titulo.textContent = "¡Sabía que dirías que sí! ❤️";
      // Cambia el GIF a uno de reacción positiva
      mainGif.src = "/media/C.gif";
      // Lanza confeti
      confetti({ particleCount: 200, spread: 200, origin: { y: 0.6 } });
    });
  
    btnNo.addEventListener("click", function() {
      titulo.textContent = "¿Segura? ¡Piénsalo de nuevo!";
      // Cambia el GIF a uno que represente duda o rechazo
      mainGif.src = "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif";
      confetti({ particleCount: 30, spread: 50, colors: ['#ff0000', '#ffa500'], origin: { y: 0.3 } });
    });
    let contador = 0
    btnTalvez.addEventListener("click", function() {
        let mensaje, gif;
    
        if (contador < mensajesTalvez.length || contador < gifsTalvez.length) {
          // Mostrar elementos en orden
          mensaje = mensajesTalvez[contador];
          gif = gifsTalvez[contador];
          contador++;
        } else {
          // Mostrar elementos de manera aleatoria
          mensaje = obtenerElementoAleatorio(mensajesTalvez);
          gif = obtenerElementoAleatorio(gifsTalvez);
        }
    
        // Actualiza el contenido del título y la imagen del GIF
        titulo.textContent = mensaje;
        mainGif.src = gif;
    
        // Lanza confeti con configuración personalizada
        confetti({
          particleCount: 80,
          spread: 60,
          colors: ['#ff69b4', '#ff1493', '#db7093'],
          origin: { y: 0.5 }
        });
      });
});
  