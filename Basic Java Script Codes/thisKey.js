const person = {
    firstName: "Shariar",
    lastName : "Rafi",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    getFullName : function() {
        return this.fullName();
    }
  };

console.log(person.getFullName());


const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
let x = person1.fullName.call(person2);
  console.log(x);