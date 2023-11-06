//*Cuenta regresiva

//seleccionar el DOM esto para indicar que alli será ejecutada la fucion por tanto se deberá renderizar
document.addEventListener("DOMContentLoaded", () => {

   //seleccionar elementos del DOM mediante el ID
   const startButton = document.getElementById("startButton");
   const datosContainer =  document.getElementById("datos");
   const countDownContainer = document.getElementById("count-down");
   const habilidadInput = document.getElementById("habilidad-input");
   const moduloInput = document.getElementById("modulo-input");
   const horasInput = document.getElementById("horas-input");
   const minutosInput = document.getElementById("minutos-input");
   const segundosInput = document.getElementById("segundos-input");
   const nombreHabilidad = document.getElementById("nombre-habilidad");
   const nombreModulo = document.getElementById("nombre-modulo");
   const horasDisplay = document.getElementById("horas");
   const minutosDisplay = document.getElementById("minutos");
   const segundosDisplay = document.getElementById("segundos");

   //se agregar la funcion de addEvenListerner para agregar un evento de click al botón de empezar
   startButton.addEventListener("click", () => {
     //se almacena el valor de cada campo y se le agrega parseInt para convertirlo en un número
     const horas = parseInt(horasInput.value);
     const minutos = parseInt(minutosInput.value);
     const segundos = parseInt(segundosInput.value);


     //* condiciones (seguridad y optimización)
     // se agrega una condición para asegurarse que el valor de los campos del tiempo no sean ingual a cero
     if (horas + minutos + segundos === 0) {
       alert("Por favor, ingresa un tiempo válido.");
       return;
     }

     if (horas < 0 || minutos < 0 || segundos < 0) {
       alert("Por favor, ingresa valores de tiempo válidos.");
       return;
     }

     

     if (!habilidadInput.value || !moduloInput.value) {
       alert("Por favor, ingresa el nombre de la habilidad y del módulo.");
       return;
     }

     nombreHabilidad.innerText = habilidadInput.value;
     nombreModulo.innerText = moduloInput.value;
     horasDisplay.innerText = horas.toString().padStart(2, "0");
     minutosDisplay.innerText = minutos.toString().padStart(2, "0");
     segundosDisplay.innerText = segundos.toString().padStart(2, "0");

     countDownContainer.classList.remove("disabled");

     datosContainer.classList.add("disabled");

     // Iniciar la cuenta regresiva aquí
     let tiempoRestante = horas * 3600 + minutos * 60 + segundos;
     const temporizador = setInterval(function () {
       if (tiempoRestante === 0) {
         clearInterval(temporizador);
         alert("¡Cuenta regresiva finalizada!");
       } else {
         tiempoRestante--;
         const horasRestantes = Math.floor(tiempoRestante / 3600);
         const minutosRestantes = Math.floor((tiempoRestante % 3600) / 60);
         const segundosRestantes = tiempoRestante % 60;
         horasDisplay.innerText = horasRestantes.toString().padStart(2, "0");
         minutosDisplay.innerText = minutosRestantes
           .toString()
           .padStart(2, "0");
         segundosDisplay.innerText = segundosRestantes
           .toString()
           .padStart(2, "0");
       }
     }, 1000);
   });
});
