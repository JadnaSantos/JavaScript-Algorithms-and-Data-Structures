const quotes = [
    {
        nome: 'Stephen King',
        quotes: 'Get busy living or get busy dying.'
    },
    {
        nome: 'Martin Luther King',
        quotes: 'Our lives begin to end the day we became silent about things that matter.'
    },
    {
        nome: 'Oprah Winfrey',
        quotes: 'Be thankful for what you have: you ll end up having more, if you concentrate on what you don t have, you will never, end have enough.'
    },
    {
        nome: 'Beyonce',
        quotes: 'Be healthy and take care of yourself but be happy with the beautiful things that make you, you.'
    }
    
]

const quotesBtn = document.querySelector('#quoteBtn');
const aut = document.querySelector('#author');
const quote = document.querySelector('#quote');

quotesBtn.addEventListener('click', displayQuote);

function displayQuote(){

    let number = Math.floor(Math.random()*quotes.length);
    aut.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}