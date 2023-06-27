// function addAndMultiply(a, b){
//     return[a+b, a*b]
// }
// const[sum, product] = addAndMultiply(2,3)
// console.log(sum)
// console.log(product)
//-----------------------------
// const array = ["a", "b", "c", "c"]
// const person = {
//     name: "Shruthi",
//     age: 27,
//     favoritefood: "rice",
//     address:
//     {
//         street: "123 main st",
//         city: "Bangalore"
//     }
// }
//---------------------------------------
// const { address: {street}} = person
// console.log(street)

// function nameToFirstAndLast (fullName) {
//    // array: return fullName.split(" ")
//    // object:
//    const [firstName, lastName] = fullName.split(" ")
//    return {
//     firstName: firstName,
//     lastName: lastName
//    }

// }

// //const [firstName, lastName] = nameToFirstAndLast("Shruthi Kamath")
// const {firstName, lastName} = nameToFirstAndLast("Shruthi Kamath")
// console.log(firstName)
// console.log(lastName)
//----------------------------------

//Enhanced object
// const name = "Shruthi";
//     const age= 27;
//     const ageMetric = "InYears";
//     const city= "Udupi";

//     const obj = {
//       name,
//       [`age${ageMetric}`]:age, //ageInYears : 27
//       city,

//       sayHi(){
//         console.log("hello world!");
//       }
//     }

//     console.log(obj)

// Default Parameters
//  function greet(firstName, lastName, {salutation = "Hi", suffix="Mrs"}={})
// {
//   console.log(suffix +" "+ firstName + " " + lastName + " " +salutation)
// }

// greet("Shruthi", "Kamath")
//--------------------------------------------------------------------
//Generators
// function* fibonacciGenerator(){
//     let prevOne = 0;
//     let prevTwo = 1;

//     yield 0;
//     yield 1;

//     while (true) { //infinite loop but since it is inside generator function, it will run only when generator.next() is called
//         const result = prevOne + prevTwo;
//         yield result;
//         prevOne = prevTwo;
//         prevTwo = result;
//     }
// }
// const generator = fibonacciGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//----------
// function* idGenerator() {
//     let currentID = 1
//     while (true) {
//         yield currentID++;
//   }
// }

// const generator = idGenerator();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
//----------------------------------------------------------
    
//Bind function
// window.name = "Global Name";
// const person = {
//     name: "Shruthi"
// };

// function printName() {
//     console.log(this.name)
// }

// const newPrintName = printName.bind(person);
// newPrintName();

// function product(a, b) {
//   return a * b;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const newNumbers = numbers.map(product.bind(null, 3));
// console.log(newNumbers);
 //-------------------------------------------