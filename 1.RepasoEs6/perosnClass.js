class Person{

    constructor(name,age,job){
        this.name=name;
        this.age=age;
        this.job=job;
    }

    saludar(){
        return `hola ${this.name}`;
    }
}

const person = new Person("eddison", 29,"Teacher");

console.log(person.saludar());
console.log(person.age);



