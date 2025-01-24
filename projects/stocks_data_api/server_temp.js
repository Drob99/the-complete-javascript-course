// This file is an alternative for server.js
const express = require('express');
const puppeteer = require('puppeteer')
const app = express()
const port = 8383

// let stockTicker = 'aapl'

async function scrapeData(stockTicker) {
    if (!stockTicker)
        return

    try {
        const url = `https://finance.yahoo.com/quote/${stockTicker}/history?p=${stockTicker}`;

        // launch a new browser
        const browser = await puppeteer.launch({ headless: true });

        // open a new page
        const page = await browser.newPage();

        // navigate to url
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

        // Wait for the table's 6th column to load on the page (this ensures we wait for data to appear)
        await page.waitForSelector('td:nth-child(6)');
    
        // extract text content
        const data = await page.evaluate(() => {
            const elements = document.querySelectorAll('td:nth-child(6)');
            // map over elements and extract text
            return Array.from(elements).map(element => element.textContent.trim())
        })

        // console.log(data);

        // close browser
        await browser.close();

        // return extracted data array
        return data;
    } catch (err) {
        console.log('Error scraping data: ', err.message)
        return []
    }
}

// middleware

app.use(express.json());
app.use(require("cors")());
app.use(express.static("public"));

app.post('/api', async (req, res) => {
    const { stockTicker: ticker } = req.body
    console.log(ticker);
    const prices = await scrapeData(ticker)
    if (prices.length > 0) {
        res.status(200).send({ prices });
    } else {
        res.status(500).send({ error: 'Failed to fetch data' });
    }
})

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
})
