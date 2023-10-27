class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    };

    drive(){
        console.log(`${this.name} has been started, bhroom..`)
    }
};

const car1 = new Car("Toyota",2023); //create an accual object 
const car2 = new Car("Suzuki",2011); //create an accual object 
const car3 = new Car("Volvo",2008); //create an accual object 

console.log(car1);
console.log(car2);
console.log(car3);
car1.drive();
car2.drive();
car3.drive();