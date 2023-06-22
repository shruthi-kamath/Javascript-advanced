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

