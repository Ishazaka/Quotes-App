
const quotes = [
    {
    quote: `“The best way to appreciate your job is to imagine yourself without one.”`,
    author: `~ Oscar Wilde`

  },
{
 quote: `“All our dreams can come true, if we have the courage to pursue them.”`,
    author: `~  Walt Disney`

},
  {
    quote: `"I can give you a six-word formula for success: Think things through--then follow through."`,
    author: `~ Edward Rickenbacker`
  },

    
    {
quote: `“The big secret in life is there is no secret.Whatever your goal, you can get there if you’re willing to work.”`,
    author: `~ Oprah Winfrey`
 
 },
  
  {
 quote: `“The secret of getting ahead is getting started.”`,
    author: `~ Mark Twain`

  },
  {
    quote: `“Hustle in silence and let your success make the noise.”`,
    author: `~ Unknown`
  } ,

    {
  quote: `“Don’t be afraid to give up the good to go for the great.”`,
    author: `~ John D. Rockefeller`
},
{
   quote: `“Invest in your dreams. Grind now. Shine later.”`,
    author: `~ Unknown`
  
},
{
  quote: `"When people talk, listen completely."`,
    author: `~ Ernest Hemingway`

},
     ]

 const btn = document.querySelector('.btn');
 const quote = document.querySelector('.firstquote') ;
const author = document.querySelector('.author');

btn.addEventListener('click',() => {
 
 let random = Math.floor(Math.random()*quotes.length);
  quote.innerHTML= quotes[random].quote;
  author.innerHTML= quotes[random].author;
})
    
