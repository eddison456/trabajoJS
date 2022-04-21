const arr = [
    { name: "luna", sex: "f", age: 7, species: "dog" },
    { name: "jimmy", sex: "m", age: 60, species: "human" },
    { name: "snoop", sex: "m", age: 60, species: "human" },
    { name: "jennifer", sex: "f", age: 60, species: "human" },
    { name: "yeller", sex: "f", age: 20, species: "dog" },
  ];
//nombre de las personas con animales dog 
  const name = arr.filter((u)=>u.species==="dog")
                                    .map((u)=> u.name);
console.log(name);

// nombre de las personas con sexo f
const namesex = arr.filter((e)=>e.sex==="f")
.map((e)=> e.name);
  
console.log(namesex);

//total de edades 
const totaledad= arr.reduce((contador,e)=>(contador += +e.age),0);

console.log(totaledad);

//promedio de edades 

const lengtHuman =arr.filter((x)=>x.species==="human");

console.log(lengtHuman.length)
const promHuman =lengtHuman.reduce((suma,x)=>(suma+=x.age),0)/lengtHuman.length;

console.log(promHuman);

//edades mayor a 50

const mayorNombre=arr.filter((u)=>u.age>50).filter((u)=>u.species==="human").map((u)=>u.name)
  console.log(mayorNombre)


