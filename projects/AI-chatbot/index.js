// Initialize the chatgpt api, and then we are going to prompt a user for a message, and continue the conversation until the user ends the file

// ! Big Note: You need a credit card to get to use the API; otherwise, you will keep getting quota exceeded error

import OpenAI from 'openai'
import { createRequire } from 'module'
const require = createRequire(import.meta.url) // The require is not there in type: "module"
const prompt = require("prompt-sync")();

require('dotenv').config() // config initializes the library & reads env

// step 1 - initialize chatgpt api

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY

// const configuration = new Configuration({
//     apiKey: OPENAI_SECRET_KEY
// })

const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY
});

// step 2 - create context for the api (give it some personality)

const context = 'You are a person who helps software engineers by answering their questions and giving them advice and suitable, beneficial roadmaps. Your name is Madi.'
const model = 'gpt-4o-mini'
let messages = [
    {
        "role": "user",
        "content": "tell me a joke"
    }
]
    
// step 3 - define the function to retrieve the api message based on user input

async function sendPrompt() {
    const current_messages = [
        {
            "role": "system",
            "content": context
        },
        ...messages
    ]

    const completion = await openai.chat.completions.create({
        model,
        messages: current_messages
    }) // object literal -> refer to ES6

    let response = completion.choices[0].message
    messages.push(response)
    console.log(response.content);
    getUserInput()
    // console.log(completion.choices[0].message.content)
}

// step 4 - create a run function that requests a user input

async function run() {
    getUserInput()
}

function getUserInput() {
    let new_user_input = prompt('\nHow would you like to respond?')
    messages.push({
        'role': 'user',
        'content': new_user_input
    })
    sendPrompt()
}

run()