    var caracterEncriptado = ["enter", "imes", "ai", "ober", "ufat"];

    var caracterDesencriptado = ["e", "i", "a", "o", "u"]; 

    /* funcion que valida el texto ingresado - si no contiene al menos una mayuscula o al menos un acento

    el testeo de "regExp" arroja falso retorna el valor "falso" a la funcion boton */


    function validar(){

        var regExp=/[A-ZáéíóúÁÉÍÓÚ]/;

            var ok = false;

            if(ok == false){

                var parrafo1 = document.querySelector(".parrafo1").value;

                ok = regExp.test(parrafo1)};
                    
                console.log(ok);
                    
                return ok;

            }
    
    //Esta funcion reemplaza los caracteres o grupos de caracteres.        

                    
    function encriptarDesencriptar(listaCaracteres1, listaCaracteres2){

        var parrafo1 = document.querySelector(".parrafo1").value;
                
        var nuevoArray = listaCaracteres1.map(function(elementoActual){

                    var pos = listaCaracteres1.indexOf(elementoActual);

                    var arrayNuevo = parrafo1.replaceAll(elementoActual, listaCaracteres2[pos]);

                    parrafo1 = arrayNuevo;

                    console.log(parrafo1);

                    return parrafo1;

                }
                );
                console.log(parrafo1);

                return parrafo1;
                
            }
    
    /* Esta funcion se encarga de exhibir en pantalla y ocultar los bloques que corresponden, tranfiriendo 

    los datos entre bloques que sea necesaria luego de que se hace click en el boton encriptar o desencriptar*/


    function mostrarPantalla(){

        var parrafo1 = document.querySelector(".parrafo1");

        var parrafo2 = document.querySelector(".parrafo2");

        var parrafo3 = document.querySelector(".parrafo3");

        var muneco = document.querySelector(".muneco");

        var mensaje = document.querySelector(".mensaje");

        var botonCopiar = document.querySelector(".copiar")

        parrafo2.innerHTML = parrafo1.value;

        parrafo2.style.visibility = "visible";

        parrafo1.style.visibility = "hidden";

        muneco.style.display = "none";

        mensaje.style.display = "none";

        parrafo3.style.display = "block";

        botonCopiar.style.display = "block"; 

    }

    /* Esta función se encarga de colocar el puntero nuevamente en el "parrafo1" y 
    
    eliminar el texto que alli se hubiera ingresado a fin de que el suario ingrese
    
    nuevamente el texto a ser encriptado o desencriptado en caso que este haya ingresado un 
    
    texto no válido */

        
    function FocusOnTextarea(){
                
        document.querySelector(".parrafo1").focus();

        document.querySelector(".parrafo1").value ="";

        document.querySelector(".parrafo1").placeholder ="Solo letras minúsculas y sin acentos";


    }

    // funcion que contiene la logica necesaria para ambos botones (de encriptacion y de desencriptacion)


    function procesaBoton(caracter1, caracter2){

        var continuar = validar(); 

        if(continuar == false){

            mostrarPantalla();

            var textoEncriptado = encriptarDesencriptar(caracter1, caracter2);
                    
            document.querySelector(".parrafo3").innerHTML = textoEncriptado;


        }
        else{

            FocusOnTextarea();

        }                   
                
    }

    // boton de encriptación

    function boton1(){

        procesaBoton(caracterDesencriptado, caracterEncriptado);

    }

    // boton de desencriptación

    function boton2(){
        
        procesaBoton(caracterEncriptado, caracterDesencriptado);

    }



    // Boton para copiar en el portapapeles el texto encriptado o desencriptado
                

    function boton3(){

        var botonCopiar = document.querySelector(".copiar")

        botonCopiar.style.display = "none"; 

        var botonCopiar2 = document.querySelector(".copiar2")

        botonCopiar2.style.display = "block"; 

        var parrafo3 = document.querySelector(".parrafo3");

        var boton3 = document.querySelector(".copiar");
                
        navigator.clipboard.writeText(parrafo3.textContent);      
            
    }

        
