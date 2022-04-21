/***
 * 
 * funtiones declaracion
 */

function operaciones (valor,valor2){
return valor*valor2;
}


console.log(operaciones(5,5));
/***
 * 
 * funtiones expression
 * 
 */


const calculoIva=  function (valor){
    return valor*0.19;
}

console.log(calculoIva(200));

const person ={
    nombre : "messi ",
    saludar: function(nombre){
        return `hola ${nombre};`
    }
}

console.log(person.saludar("ana"));