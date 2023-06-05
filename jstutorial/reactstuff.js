export default function DoSomething() {}

export const doSomething = () => {};

// Compononets are functions which take in props (args) and returns HTML
// React
const myComponent = () => {
  return <div></div>;
};

// A button in react, you can enter in an anoymous function
<button
  onClick={() => {
    console.log("hello world");
  }}
></button>;

// Tenary operators are very useful in React, for the UI.
// React allows JSX, which represnts the UI and I can write HTML into the JS
let age = 16;
let name = '';

if (age > 10) {
  name = "pedro";
} // Not in REACT
else {
  name = "Jack";
}
// Instead in React
    // If true then Pedro      
name = age > 10 && "Pedro";
// If not true then Pedro
name = age > 10 || "Pedro";

// if else operator
name = age > 10 ? "pedro" : "jack";

// How would it look in React:
const Compononet = () => {
    // The UI will render accordingly to the condition
    return age > 10 ? <div>Pedro </div> : <div>Jack</div>
}


const n = 'Pedro'; 

// Object in JS is like a dictanioary, hastable in JS and are used a lot in React
// Important to de-structure an object
const person = {
    //key , value
    name: "Pedro",
  //  n, // Can also set it to refer to n ('pedro')
    age: 20,
    isMarried: false,
};

// This takes too much space in-order to destructure
// const Name = person.name;
// const Age = person.age;
// const isMarried = person.isMarried;

// Do this in React or JS:
//  destruct
const {Name, Age, isMarried} = person // Represents the different properites of Person object


// Same object as person but a different name
// The spread operators keeps everything inside of the person object
// But change the name
const person2 = {...person, name: 'Jack'}; 


// Can use it on arrays too

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"]; // Adding a new name to a new array


let Names = ["Pedro", "Jessica", "Carol", "Pedro", "Pedro"];

// .map() - Most used , .filter() - Most used // , .reduce()

// Iterate through the array and executes a function for each element
Names.map((name) => {
    // return name + "1"; // Adding 1 to each element, Pedro1
    return <h1>{name}</h1> // Generates a header for each element in the list
})

Names.filter((name) => {
    return name !== "Pedro" // An array without Pedro -> ["Jessica", "Carol"]
})


// Async + Await + Fetch
