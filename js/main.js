//console.log()

let nombre = "Abraham"
nombre = nombre.toUpperCase();
let letra="";
let contFinal=0
for ( let index = 0; index<nombre.length;index++){
    console.log(nombre.charAt(index));
    let contTemp=1
    for(let cont=index+1; cont<nombre.length; cont++){
        if(nombre.charAt(index) == nombre.charAt(cont))
            contTemp++;
    }
    if(contTemp>contFinal){
        contFinal=contTemp;
        letra = nombre.charAt(index);
    }
    
        nombre.charAt(index)==nombre.charAt(cont);
    
}
console.log(contFinal,nombre)

// function letraRep(letra) {
//     const nombre =prompt("Escribe tu nombre").toUpperCase();
//     const comparar = letra.toUpperCase();
//     let contador = 0;

//     for (let i=0;i<nombre.length; i++){

//     }

//   };