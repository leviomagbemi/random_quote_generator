const quoteCategory = document.getElementById('quote-category');
const quoteOutput = document.getElementById('quote-output');
const trigger = document.getElementById('trigger');
const nameOutput = document.getElementById('name-output');

let userName = prompt('Enter your first name');
let quotes;

// Fetch quotes on DOM load
document.addEventListener('DOMContentLoaded', () => {
    displayUsername(userName);

    fetch('quotes.json')
    .then((data) => data.json())
    .then((value) => {
        quotes = value
        console.log(quotes)
    }).catch((error) => {
        console.log(error)
    })
})


// Trigger application to generate quote
trigger.addEventListener('click', () => {
    if (!userName){
        alert('Enter Your First Name')
        userName = prompt('Enter your first name');
    
        if(userName){
        displayUsername(userName);

        return;
        }
    }

    if (!quoteCategory.value){
        alert(`${displayUsername(userName)}, please select a quote category`);
        return;
    }

    generateQuote();
})


// Generate quote
function generateQuote(){
    const selectedCategory = quotes[quoteCategory.value.toLowerCase()];
    const randomNum = Math.floor(Math.random() * selectedCategory.length);
    const randomQuote = selectedCategory[randomNum];

    quoteOutput.textContent = randomQuote;
}


// Display username
function displayUsername(userName){
    if (userName){
    return nameOutput.textContent = userName[0].toUpperCase() + userName.slice(1)
}
}