class Car{
    constructor(name, year){
        this.name = name;        
        this.year = year;        
    }

    run(){
        console.log(`${this.name} is running..`)
    }
}

const bmw = new Car ("BMW",2010);
const audi = new Car ("Audi",2023);


console.log(bmw);
console.log(bmw.run());