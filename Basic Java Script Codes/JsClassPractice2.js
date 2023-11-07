class Car{
    constructor(name){
        this.name = name;        
    }

    run(){
        console.log(`${this.name} is running..`)
    }
}


//inheritacne
class myCar extends Car{
    constructor(name, year){
        super(name);
        this.year = year;
    }
}

let c1 = new myCar("BMW",2023);

console.log(c1);
console.log(c1.run()); //run method is existed in the parent class



