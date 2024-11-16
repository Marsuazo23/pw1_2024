document.addEventListener("DOMContentLoaded", function () {
    //alert("Content Loaded desde Script externo js");

    let bolEdad = true;
   console.log("Iniciando JS", bolEdad); 
   let resultado;
   resultado = 10 + 30;
   resultado2 = parseFloat("10.999") + 30;
   console.log("Comparar Operaciones:", {resultado, resultado2});
   
   resultado = 10 - 5;
   console.log("Resta", resultado);

   resultado = 10 * 5;
   console.log("Multiplicación", resultado);

   resultado = 10 / 5;
   console.log("División", resultado);

   resultado = 10 % 3;
   console.log("Módulo", resultado);

   resultado++;
   resultado--;

   resultado += 10;
   resultado -= 5;
   resultado *= 2;
   resultado /= 3;

   let strMensaje = `El resultado: ${resultado}`;
   let strMensaje2 = 'El resultado: ' + resultado; 

   let strDoubleQuotes = "Esto es \"UNA CITA Bibliografica\" se debe usar \\ para escapar el simbolo ";
   let strSingleQuotes = 'Esto es "UNA CITA Bibliografica" no se debe usar \ para escapar el simbolo';
});