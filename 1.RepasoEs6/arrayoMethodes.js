let citys =["Medellin","Envigado"];

for(let i =0 ; i<citys.length;i++){
    console.log(citys[i]);
}

citys.forEach((city)=>{
    console.log(city);
})


console.log(citys);

citys.push("bello");

console.log(citys);


/** push-shif-pop son mutables */
const primerItem=citys.shift();

console.log(primerItem);

console.log(citys);

const ultimoItem = citys.pop();

console.log(ultimoItem);

console.log(citys);


/** los inmutables */

const nombres =["juan","pedro","luis"];

//Map = extraer informacion 

var resultado = nombres.map((name)=> `${name}_hola`);

console.log(resultado);
console.log(nombres);

const product =[{
    name:"malta",
    cost:10
},
{
    name:"gaseosa",
    cost:20
},
{
    name:"agua",
    cost:5
}];

let reglasName = product.map((product)=>product.name)

console.log(reglasName);

console.log(product);


let taxProduct =product.map((product)=>{
    return {...product, tax:19}
})

console.log(taxProduct);

console.log(product);

const universidades=[
    {nombre:"poli jic", ciudad:"medellin", nacionales:10,internacional:0},
    {nombre:"item", ciudad:"medellin", nacionales:5,internacional:1},
    {nombre:"unal", ciudad:"bogota", nacionales:15,internacional:1},
    {nombre:"¿andex", ciudad:"cali", nacionales:5,internacional:0},
    {nombre:"unal", ciudad:"bogota", nacionales:10,internacional:0},
];

//Map

const NombreU= universidades.map((uni)=>uni.nombre);

console.log(NombreU);

//find devuelve lso valores de la condicoines 

const unicali= universidades.find((u)=>u.ciudad==="cali");
console.log(unicali);
//= un igual es para ingresar datos o asignar
//== el comparar el valor
//=== comparar el valor y tipo de dato

//Every valida que todos cumplan condiciones 

const Isinterancional= universidades.every((u)=>u.internacional>0);
console.log(Isinterancional);

//some valida que al menos alguno cumpla 
const IsSomeinterancional= universidades.some((u)=>u.internacional>0);
console.log(IsSomeinterancional);
//filter es un filtro 

const nameuniBogota = universidades.filter((u)=>u.ciudad==="bogota")
                                    .map((u)=> u.nombre);
console.log(nameuniBogota);

//reduce

const totalInternational= universidades.filter((u)=>u.internacional>0)
                                        .reduce((contador,u)=>(contador += +u.internacional),0);

console.log(totalInternational);


////////////////////////

const totalnacionalCitymedellin =universidades.filter((u)=>u.ciudad==="medellin")
                                            .reduce((i,u)=>(i+=u.nacionales),0);

console.log(totalnacionalCitymedellin);


//{ nacional :x , internacional :y}

const totales =universidades.reduce((acumulador,u)=>({nacional :acumulador.nacional + u.nacionales ,
                                                      internacional:acumulador.internacional+u.internacional, }),
                                                    {nacional :0 , internacional :0})


 console.log(totales);                                                   