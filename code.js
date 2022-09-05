const boton = document.querySelector("#startGame");
const input = document.querySelector("#input-letters");
const lineas = document.querySelector("#lineas");
const ahorcado = document.querySelector("#ahorcado");
let palabra = null ;
var listaPalabras = ["uno","dos","tres","cuatro","cinco","elefante","hipopotamo"];
function listado (){
    const aleatorio = Math.round(Math.random()*(listaPalabras.length-1));
    palabra=[listaPalabras[aleatorio]];
}
juego()
function juego (){
    listado()
    ahorcado.src=`../images/img${1}.png`;
    input.value=""
    lineas.innerHTML="";
    let intento = 1 ;
    let verificador= 0;
    let continuar = true;
    let letraAdivinada="";

    cantidadDeLineas ="";
    for (i=0;i<palabra[0].length;i++){
        cantidadDeLineas += `<div style="display:block  ;margin:auto;">
                                <p class="letraAdivinar item${i+1}" style="color: white;">${palabra[0][i]}</p>
                                <img id="lineas-img" src="../images/Rectangulo.png" alt="">
                            </div>`
    };

    lineas.insertAdjacentHTML(`afterbegin`,cantidadDeLineas);
    cantidadDeLineas ="";


    const verificarCaracteres =(letras)=>{
        for (j=0;j<palabra[0].length;j++){
            console.log(`letra => ${letras} // palabra => ${palabra[0][j]}`)
            // console.log(`letra en funcion => ${letras}`)
            if (letras == palabra[0][j]){
                console.log(`SI esta la letra ${letras}`);
                document.querySelector(`.item${j+1}`).style.color="black";
                letraAdivinada +=letras;
                verificador++
            }
        }
    } 

    const Verificar =(letra)=>{
        console.log(`<b>${palabra}</b>`)
        if (palabra[0].includes(letra)&&(letraAdivinada.includes(letra)==false)){
            console.log(letra)
            verificarCaracteres(letra);
            if (verificador>=palabra[0].length){
                document.querySelector("#input-letters").readOnly=true;
                mensaje("Ganaste")
            }
        }else{
            intento++
            console.log(`NO esta la letra ${letra} <br> ${palabra[0].includes(letra)}`);
            if (intento<9){
                ahorcado.src=`../images/img${intento}.png`;
            }else if (intento==9){
                ahorcado.src=`../images/img${intento}.png`;
                document.querySelector("#input-letters").readOnly=true;
                mensaje("Perdiste")
            }
        }
    }
    const mensaje =(accion)=>{
        continuar = false;
        if (accion=="Perdiste"){
            let errores = document.querySelector("#error").style.display="flex";
            setTimeout(function(){
                errores =  document.querySelector("#error").style.display="none";
            },3000);
        }
        else if (accion=="Ganaste"){
            let correcto = document.querySelector("#correcto").style.display="flex";
            setTimeout(function(){
                correcto =  document.querySelector("#correcto").style.display="none";
            },3000);
        }
    }
    let letrasExcritas="";
    input.addEventListener("keydown",(e)=>{
        let letra = e.key;
        if (letra.charCodeAt()>96&&letra.charCodeAt()<123||letra.charCodeAt()==46||letra.charCodeAt()==10||letra.charCodeAt()==32||letra.charCodeAt()==44||letra.charCodeAt()>47&&letra.charCodeAt()<58) {
            if(continuar && (letrasExcritas.includes(letra)==false)){
                letrasExcritas += letra;
                Verificar(letra)
            }
        }; 
    })
}
const boton_addWords = document.querySelector("#boton-addWords");
const agregarPalabra = document.querySelector(".agregarPalabra");
const GuardarPalabra = document.querySelector("#GuardarPalabra");
const CancelarPalabra = document.querySelector("#Cancelar");

boton_addWords.addEventListener("click",()=>{
    document.querySelector(".container-addWord").style.display="flex"
})
GuardarPalabra.addEventListener("click",()=>{
    let nuevaPalabra = agregarPalabra.value;
    if (nuevaPalabra.value != ""){
        listaPalabras.push(`${nuevaPalabra}`);
        agregarPalabra.value="";
        juego()
        document.querySelector(".container-addWord").style.display="none" 
    }
})
CancelarPalabra.addEventListener("click",()=>{
    document.querySelector(".container-addWord").style.display="none" 
})








