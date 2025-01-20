const prompt = require('prompt-sync')()
// Compound interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value

// let initial_amount = 20000
// let monthly_contribution = 400
// let number_of_years = 30
// let interest_rate = 10

// step 1 - define a function that we can use to calculate the final value of the compounded interest

function compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = initial_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total += annual_contribution
        total *= ((100 + interest_rate) / 100)
    }

    return total.toFixed(2)
}

// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)

function calculateRegular(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let annual_contribution = monthly_contribution * 12
    let total = initial_amount + annual_contribution * number_of_years
    return total.toFixed(2)
}

// console.log(compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate) - calculateRegular(initial_amount, monthly_contribution, number_of_years, interest_rate));



// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run() {
    let initial_amount = parseInt(prompt('What is your initial investment ($)? '))
    let monthly_contribution = parseInt(prompt('What is your monthly contribution ($)? '))
    let number_of_years = parseInt(prompt('For how many years would you like to compound your investment? '))
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over these years? '))

    printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate)
}

// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

function printOutput(
    initial_amount,
    monthly_contribution,
    number_of_years,
    interest_rate
    ) {
    let final_value = compoundInterest(
        initial_amount,
        monthly_contribution,
        number_of_years,
        interest_rate
    );
    let value_without_compounding = calculateRegular(
        initial_amount,
        monthly_contribution,
        number_of_years,
        interest_rate
    );
    let summary = `INITIAL_AMOUNT: $${initial_amount}\nMONTHLY_CONTRIBUTION: $${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}\n\nFINAL_COMPOUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${value_without_compounding}\nDIFFERENCE: $${
        final_value - value_without_compounding
    }`;
    console.log(summary);
}

run()