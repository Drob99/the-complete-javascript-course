const sleep = ms => new Promise(r => setTimeout(r, ms))

// Q1
async function hello() {    
    await sleep(2000)
    console.log('Hello world!');
}

// hello()

// Q2
async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/nonexistent')
        console.log(res);
    } catch (error) {
        console.log('Error fetching data');
    } 
}

// fetchData()

// Q3
async function fetchUserData() {
    try {
        const res = await fetch('https://the-one-api.dev/v2/book')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log('Error fetching data');
    }
}
// fetchUserData()

// Q4
async function postUserData() {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name: 'omar'})
        }
        const res = await fetch('https://the-one-api/v2/book', options)
        console.log(res);
    } catch (error) {
        console.log('Error posting data');
    }
}

postUserData();