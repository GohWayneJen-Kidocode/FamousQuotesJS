const quotes = [
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name:'John F.Kennedy',
        quote:'Those who dare to fail miseraby can achieve greatly.'
    },
    {
        name:'Abraham Linclon',
        quote:"I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name:'Leonardo Da Vinci',
        quote:'It had long since come to my attention that people of acomplishment rarely sat back and let things happen to them. they went out and happened to things.'
    },
    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy, be.'
    }
]

const quoteBt = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}
