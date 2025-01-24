// step 1 - define the web scraper

const cheerio = require('cheerio')

// let stockTicker = 'mara' // testing purposes
let type = 'history'

async function scrapeData(stockTicker) {
    try {
        // step a - fetch the page html
        const url = `https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}`
        const response = await fetch(url);
        console.log(response);
        const html = await response.text()

        const $ = cheerio.load(html) // syntax for web scraper
        const priceHistory = getPrices($)
        // console.log(priceHistory);
        return priceHistory;
    } catch (error) {
        console.log(error.message);
    }
}

function getPrices(cheerio) {
    // get returns all in array
    const prices = cheerio('td:nth-child(6)').get().map((current_value) => { return cheerio(current_value).text() })
    
    return prices
}

// scrapeData() // test the function

// step 2 - initialize server that serves up an html file that the user can play with

const express = require('express')
const app = express()
const port = 8383


// middleware
app.use(express.json())
app.use(require('cors')())
app.use(express.static('public')) // serves the index.js inside the public folder


// step 3 - define api endpoints to access stock data (and call web scraper)

app.post('/api', async (req, res) => {
    const { stockTicker: ticker } = req.body
    console.log(ticker);
    const prices = await scrapeData(ticker)
    res.statusCode(200).send({prices})
})

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});