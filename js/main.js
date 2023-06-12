var quoteData=[
    {
        quote:"“Be yourself; everyone else is already taken.“",
        publisher:"-- Oscar Wilde"
    },
    {
        quote:"“So many books, so little time.”",
        publisher:"-- Frank Zappa"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        publisher:"-- Marcus Tullius Cicerpo"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        publisher:"-- Mae West"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        publisher:"-- Robert Frost"
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        publisher:"-- Mark Twain"
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        publisher:"-- Elbert Hubbard"
    },
    {
        quote:"“You miss 100% of the shots you don't take.”",
        publisher:"-- Wayne Gretzy"
    },
    {
        quote:"“Do not take life too seriously. You will not get out alive.”",
        publisher:"-- Elbert Hubbard"
    },

];

function generateQuote(){
    var randomQuote=Math.floor(Math.random() * quoteData.length);
    // console.log(randomQuote);
    document.getElementById("quote").innerHTML=quoteData[randomQuote].quote;
    document.getElementById("quotePublisher").innerHTML=quoteData[randomQuote].publisher;
}
