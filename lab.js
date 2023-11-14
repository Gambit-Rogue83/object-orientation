//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/
//Code here

const me = {  // me object that includes my age and name
  name: 'Shattuck',
  age: 35
}
//////////////////////////// PROBLEM 2 ////////////////////////////
//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).
//Code here

const dog = {  // dog object that contains name, color, age and if he's a goodboy
  name: 'Bowser',
  color: 'black',
  age: 3,
  goodBoy: true
}

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */
//Code here

console.log(dog.name) //accessing the value in the object through dot notation

//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */
//Code here

console.log(dog['color']) //accessing the value in the object through bracket notation

//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band,
  food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite
  thing in that category.
*/
//Code here

const favoriteThings = { //favoriteThings object, containing my favorite things
  band: 'MercyMe',
  food: 'Hanwoo',
  person: 'Jesus',
  book: 'Merlin',
  movie: 'Inception',
  holiday: 'Christmas'
}

/*
  After you've made your object, use bracket or dot notation to add another
  key named 'car' with the value being your favorite car and then another
  key named 'show' with the value being your favorite show.
*/

//Code here

favoriteThings.car = 'Lamborghini' //adding some values to my favoriteThings
favoriteThings.show = 'Friends'

/*
  Now use bracket or dot notation to change the value of the food key in
  your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be
  'Harry Potter'. (If they were either of those things already, change them
    to something else.)
*/

//Code here

favoriteThings.food = 'chicken nuggets' //modifying aspects of my favoriteThings
favoriteThings.book = 'Harry Potter'


//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = { //object containing properties of cars
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.
/*
  Use object destructuring to save the property values from the object
  carDetails into new variables.
*/
//Code Here

const {color, make, model, year} = carDetails //destructuring properties into
                                            //individual variables: color,
                                            //make, model, and year

//////////////////////////// PROBLEM 7 ////////////////////////////
/*
  In the function below named greeting, it is receiving an object as a
  parameter.
  Use object destructuring to save the object properties to new variables.
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) { //this function accepts an object as a parameter
  //Code Here
  const {title, firstName, lastName} = obj //this creates new variables from
                                        //the properties: title, firstName,
                                        //lastName

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and
  arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here

populationSize = { //population in a few states, in millions
  utah: 3.338,
  california: 39.24,
  texas: 29.53,
  arizona: 7.276
}

const totalPopulation = obj =>{ //function that takes populationSize object
  const {utah, california, texas, arizona} = populationSize //creating variables out of the properties
   return utah + california + texas + arizona //printing the sum of the state population
}

//////////////////////////// PROBLEM 9 ////////////////////////////
/*
  Write a function called ingredients that will take in an object.
  This object will have 3 properties named carb, fat, and protein.
  The property values will be strings.
  Use object destructuring to save the property values to new variables.
  Push these new variables to an array and return the array.
*/

//Code Here
const meal = {
  carb: 'processed',
  fat: 'saturated',
  protein: 'red'
}



const ingredients = obj =>{
  const {carb, fat, protein} = obj
  return [carb, fat, protein]
}

console.log(ingredients(meal))

//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.
/*
  Let's say I, the user, decided to change my name and email address to the
  following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/
//Code Here

user.name = 'Bryan G. Smith'  //modifying the name & email property of the user object
user.email = 'bryan.smith@devmounta.in'

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/
//Code Here

delete user.age  //this removes the age property from user

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and
  require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever
  values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here

class Cat {  //create the Cat class which has name, age and color properties
  constructor (name, age, color){
    this.name = name
    this.age = age
    this.color = color
  }
}
const tiger = new Cat('Federico', 7, 'orange & black stripes') //creates an object within the framework of the Class structure, and defining the properties that belong to it
console.log(tiger.name)

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and
  require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should
  print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in
  whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
class Wizard {  //create a Class for Wizard, with properties: name, age, favoriteSpell
  constructor(name, age, favoriteSpell){
    this.name = name
    this.age = age
    this.favoriteSpell = favoriteSpell
  }
  castSpell() { //method to report back the spell the Wizard has cast
    console.log(`${this.name} has cast ${this.favoriteSpell}`)
  }
}

const malfoy = new Wizard('Malfoy', 13, 'Avada Kedavra') //creating a new wizard within the Wizard class, and defining its properties

malfoy.castSpell() //this invokes the method of the object

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.
    Phone will build phone objects with brand, model, storage, color, price,
    and sold properties.
    Write a constructor that sets those values -- all of the values
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet.
    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and
    prints the string: '{brand} {model} has been sold.'
    Create another method called 'changePrice'. We can use this
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'.
    Inside the function, reassign the value of the object's price
    to be newPrice. */
//Code Here
class Phone {  //a Phone class to track: brand, model, storage, color, price and whether it sold, properties
  constructor(brand, model, storage, color, price, sold){
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false  //when creating a new Object, it will not be sold, so this is set to false to begin with
  }
  sell() {  //allows the owner to sell his phone, by confirming it's sale with a message
    this.sold = true //changes the false value (in possesion) to true (has been purchased)
    console.log(`${this.brand} ${this.model} has been sold`)
  }
  changePrice(newPrice) { //allows the owner to modify the price based on the market
    this.price = newPrice
  }
}

/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/
//Code Here

let phone1 = new Phone('Samsung', 'Galaxy S23', 128, 'sky blue', 799)
let phone2 = new Phone('Apple', 'iPhone 15 Pro', 128, 'bone white', 999)
let phone3 = new Phone('Google', 'Pixel 8', 128, 'pink', 999)
//3 phones the owner is attempting to sell off, with its features/properties

/*
  Call the changePrice function on one of your phones,
  don't forget to pass in a new price

  Then console.log that object to see the price change
*/
//Code Here

phone3.changePrice(849) //this phone has been discounted due to lack of interest
console.log(phone3)

/*
  Now call the sell method on one of your other phone objects
  Print the value of that phone's sell property to make sure it's been changed to true
*/
//Code Here

phone2.sell() //this phone is sold at price cost
console.log(phone2.sold)

//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you
  to know how to use it. Challenge yourself by going online and researching
  what the spread operator is and how to use it.
*/
//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object
//Code Here

const colorsCopy = {...colors} ///copy a prior object into a new object, maintaining the original

/*
 Now use the spread operator to combine the following 2 objects into one.
 Call the new variable helensInfo.
 When they combine, none of the properties should be repeated.
*/
//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above
//Code Here
const helensInfo = {...contactInfo, ...shippingInfo} //combine two objects
//into one, replacing similar properities with the last argument provided ex: ...shippingInfo


//Print helensInfo to see what it looks like, there should be no repeating properties.

console.log(helensInfo)

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor,
  and require these 3 parameters: capacity (how many passengers), color, and
  mileage.
  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/
//Code Here
class Vehicle {  //Create Vehicle class, with capacity, color, mileage properties
  constructor(capacity, color, mileage){
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }
  move(miles) {  //this changes the current mileage of the vehicle, it's a running total
    this.mileage += miles
    console.log(this.mileage)
  }
}
/*
  Create a vehicle using your new class and save it to a variable called
  myFirstVehicle
*/
//Code Here
const myFirstVehicle = new Vehicle(8, 'Purple', 125000) //create a new instance of myFirstVehicle

/*
  Now we'll create a class that's based off of the vehicle class.
  Write a class called Motorcycle that *extends* the Vehicle class. In the
  constructor,
  make sure you require all of the parameters from the Vehicle class as well
  as 2 new ones: make and isCool. (Hint: don't forget to call the super function)
*/
//Code Here
class Motorcycle extends Vehicle { //Motorcyle Class which is expanded from the Vehicles Class
  constructor(capacity, color, mileage, make, isCool){ //properties borrowed from parent, and new ones for this class
    super(capacity, color, mileage)  //super required

    this.make = make;
    this.isCool = isCool;
  }
}
/*
  Create a Motorcycle using your new class and save it to a variable called
  myFirstMotorcycle
*/
//Code Here
const myFirstMotorcycle = new Motorcycle(2, 'Black, white fire emblazoned', 43560, 'Harley', true)
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(346)  //how many miles the motorcyle has driven recently
/*
  Let's make another class based off of Vehicle.
  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones:
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.
  Create a method inside of the Boat class called checkSeaworthiness
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'
  Write a second function in this class called performMaintenance
  This function should set isSeaworthy to be true
*/
//Code Here
class Boat extends Vehicle { //extends the class of Vehicle
  constructor(capacity, color, mileage, name, type, isSeaworthy) {
    super(capacity, color, mileage) //recruits the parent properties: capacity, color, mileage
                            //new properties: name, type, isSeaworthy
    this.name = name;
    this.type = type;
    this.isSeaworthy = isSeaworthy
  }
  checkSeaworthiness() { //function testing whether the Boat is safe to drive on water
    if(this.isSeaworthy === true){
      console.log(`The ${this.color} ${this.type} ${this.name} is seaworthy!`)
    } else {
      console.log(`You need to get your ${this.type} in shape!`)
    }
  }
  performMaintenance() { //this function allows the owner to repair vessel, for water travel
    this.isSeaworthy = true
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like
  for all the
  properties except isSeaworthy -- make that one false. Call your variable
  myFirstBoat.
*/
//Code Here
const myFirstBoat = new Boat(12, 'sea green', 10012, 'Mr. Beaumont', 'speedboat', false)
/*
  Call the checkSeaworthiness method on your new boat
*/
//Code Here
myFirstBoat.checkSeaworthiness()
/*
  Now run the performMaintenance method on your boat
*/
//Code Here
myFirstBoat.performMaintenance()
/*
  Check the seaworthiness once more (you should be ready for the water!)
*/
//Code Here
myFirstBoat.checkSeaworthiness()
