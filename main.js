class Human {
  name;
  sex;
  constructor(name, sex) {
    this.name = name; 
    this.sex = sex;
  }
}

class Flat {
  residents = [];

  addResident(person) {
    return this.residents.push(person);
  }
}

class House {
  flats = [];
  maxFlatsCount;

  constructor(maxCount) {
    this.maxFlatsCount = maxCount;
  }

  addFalt(flat) {
    this.flats.length < this.maxFlatsCount
      ? this.flats.push(flat)
      : alert("Can`t add new flat");
  }
}

//створити декілька екземплярів класу Людина;
const person = new Human("Anna", "woman");
const anotherPerson = new Human("Mark", "man");

//створити декілька екземплярів класу Квартира;
const flat = new Flat();
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();
const flat5 = new Flat();

//додадити екземпляри класу Людина до екземплярів класу Квартира;
console.log(flat.residents);
flat.addResident(person);
flat.addResident(anotherPerson);
console.log(flat.residents);

//створити екземпляр класу Будинок;
const house = new House(2);

//додадити екземпляри класу Квартира до екземплярів класу Будинок.
house.addFalt(flat);
house.addFalt(flat1);
house.addFalt(flat2);
house.addFalt(flat3);
house.addFalt(flat4);
//house.addFalt(flat5)

console.log(house);
