const boton = document.querySelector("#startGame");
const input = document.querySelector("#input-letters");
const lineas = document.querySelector("#lineas");

const listaPalabras = ["uno","dos","tres","cuatro","cinco","elefante","hipopotamo"];
const aleatorio = Math.round(Math.random()*(listaPalabras.length-1));
const palabra=[listaPalabras[aleatorio]];
console.log(palabra);
cantidadDeLineas ="";
for (i=0;i<palabra[0].length;i++){
    cantidadDeLineas += `<img id="lineas-img" src="../images/Rectangulo.png" alt="">`
};
lineas.insertAdjacentHTML(`afterbegin`,cantidadDeLineas);

var i = 1 ;
var verificador= 0;
var continuar = true;
palabraAdivinada="";
const Verificar =(letra)=>{
    const ahorcado = document.querySelector("#ahorcado")
    if (palabra[0].includes(letra)){
        console.log(`SI esta la letra ${letra}`)
        verificador++
        palabraAdivinada+=letra;
        if (verificador>=palabra[0].length){
            alert("ganaste")
            console.log(palabraAdivinada)
        }
    }else{
        i++
        console.log(`NO esta la letra ${letra}`);
        if (i<9){
            ahorcado.src=`../images/img${i}.png`;
        }else if (i==9){
            ahorcado.src=`../images/img${i}.png`;
            alert("perdiste")
            document.querySelector("#input-letters").readOnly=true;
            continuar = false;
        }
    }
    console.log(palabraAdivinada)
}

input.addEventListener("keydown",(e)=>{
    const letra = e.key;
    if (letra.charCodeAt()>96&&letra.charCodeAt()<123||letra.charCodeAt()==46||letra.charCodeAt()==10||letra.charCodeAt()==32||letra.charCodeAt()==44||letra.charCodeAt()>47&&letra.charCodeAt()<58) {
        if(continuar){
            Verificar(letra)
        }
    }; 
})


