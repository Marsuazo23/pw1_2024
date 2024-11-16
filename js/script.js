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

   const objPersona = {
    "nombre" : "Marcela",
    "apellido" : "Suazo",
    "edad": 19,
    "correo" : "marcesuazo@gmail.com"
   }; //JSON OBJETC NOTATION JSON

   objPersona.edad = 20;

   const demoEdad = 10;
   //demoEdad = 20;

   
   const arrPersonas = [];

   arrPersonas.push(objPersona);

   //arrPersonas = []; 

   //Estructuras de control -- IF, Switch, Try catch
   let a = 10;
   let b = "10";
   if (a == b) {
    console.log("Si entro a A == B");
   }
   if (a === b) {
    console.log("Si entro a A == B");
   }
   else{
    console.log("No entro a A == B");
   }

   //Negaciones
   if (a != b) {
    console.log("Si entro a A != B");
   }
   else{
    console.log("No entro a A != B");
   }

   if (a !== b) {
    console.log("Si entro a A !== B");
   }
   else{
    console.log("No entro a A !== B");
   }

   const strGreaterThan10 = ( a > 10) ? "A es mayor a 10": "A es menor o igual a 10";
   console.log("Ternaria:", strGreaterThan10)

   let strValueSelected = 'ACT'; //ACT - INA - SPN - RTR - CNT
   switch(strValueSelected){
    case "ACT":
        console.log("Selecte");
    break;
    case "INA":
        //Expresiones
    break;
    case "SPN":
        //Expresiones
    break;
    default:
        console.log("ERROR", "No hay handlera para expresion");
        break;
   }

   //Estructuras de ciclos o iteraciones

   
});