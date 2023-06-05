// Promise in JS, An object which deals with data waiting to be done
const event = new Promise((resolve, reject) => {
    var name = "Pedro";
    name === "Pedro" ? resolve("Pedro") : reject("Name wasn't pedro");
})

// Resolve - returns some kind of value or deal with a success JSON or something
// Reject - error handler
    // Resolve // Reject
event.then((name) => {
    console.log(name)
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('promise finished');
}) // finally is called regardless


// An actual API example
// Axios allows to fetch data from an API and do HTTP requests
const axios = require("axios");
                // The API returns a promise (data)
// const data = axios.get("https://cat-fact.herokuapp.com/facts"); // Fetching an API requests, the data.
// Getting the data
// data.then((res) => {
//     // res.data (gets the data)
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// We should use async-await instead of a call-back

const fetchData = async () => {
    try{
        const data = await axios.get("https://cat-fact.herokuapp.com/facts")
        console.log(data);

    }
    catch(err)
    {
        console.log(err);
    }
}

fetchData();

// Or: async function fetchData() { }