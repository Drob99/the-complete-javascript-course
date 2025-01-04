const sleep = ms => new Promise(r => setTimeout(r, ms));

// This is an application. We will test the jsonapi
async function fetchDate() {
    try {
        const res = await fetch('https://dummyjson.com/products/1') // GET HTTP requests
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

fetchDate()


// This is for testing and getting used to async and await

// async function run() {
//     console.log('Start code');
//     await sleep(2000) // error if not placed inside async function
//     console.log('half way');
//     await sleep(2000)
//     console.log('Finished Code');
// }

// run()

// function sendInvites() {

// }

// function planCatering() {

// }

// // This is an asynchronous process. I promise I will get you information.
// sendInvites()

// planCatering()