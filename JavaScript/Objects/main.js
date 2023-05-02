// Definicion de un objeto
const person = {
  name: "Carlos",
  lastName: "Sierra",
  age: 40,
  eyeColor: blue
}

// acceso a las propiedades
person.name;
person['name'];

const persons = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};