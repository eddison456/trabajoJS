/**
 * operator rest (recibir)
 * 
 */

function calcularSaldo(nombre, ...gastos){
    let deuda=0;
      gastos.forEach((gasto)=>(deuda+=gasto))
    return `la persona ${nombre} tiene un saldo de ${deuda}`;
}

console.log(calcularSaldo("laura", 10,20,5,4,3,2,1));

/**
 * 
 * Operator spread (enviar)
 * 
 */

const deudaInicial =100;

const deudas = [10,20,30,40];

const deudaTotal= [deudaInicial,...deudas];

console.log(deudas);

console.log(deudaTotal);


console.log(calcularSaldo("laura", ...deudaTotal));

