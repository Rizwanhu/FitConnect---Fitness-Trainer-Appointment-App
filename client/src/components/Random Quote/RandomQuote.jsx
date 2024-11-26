import React, { useState, useEffect } from 'react';
import { IoReload } from "react-icons/io5";
// import refresh from "./refresh.png";
import axios from 'axios';
import "./quote.css";
import styled from "styled-components";
// import { options } from "./Quotefetch";
import { fetchQuotes } from './Quotefetch'; // Correct import
import { RefreshCw, Twitter } from 'lucide-react'





const Container = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #a78bfa, #8b5cf6);
  padding: 1rem;
`

const QuoteWrapper = styled.figure`
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`

const QuoteMark = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  font-size: 6rem;
  font-family: serif;

  @media (min-width: 768px) {
    font-size: 9rem;
  }
`

const OpenQuote = styled(QuoteMark)`
  top: 0;
  left: 0;
`

const CloseQuote = styled(QuoteMark)`
  bottom: 0;
  right: 0;
`

const QuoteText = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const Author = styled.figcaption`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`


const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 2rem 0;
`


const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`


const RandomQuote = () => {


    // let quotes = [];

    // async function loadQuotes() {
    //     const response = await fetch('');
    //     const data = await response.json();
    //     quotes.push(data);
    //     setQuote(quotes[0]);
    // }



  // // Function to fetch a random quote from the ZenQuotes API

  // const fetchRandomQuote = async () => {
  //   setLoading(true);
  //   try {
  //       const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
  //       const data = await response.json();
  //       setQuote({
  //           text: data.en,
  //           author: data.author
  //       });
  //   } catch (error) {
  //       console.error('Error fetching quote:', error);
  //   } finally {
  //       setLoading(false);
  //   }
  // };


  
//   const loadQuotes = async () => {
//     setLoading(true);
//     try {
//         const quotes = await fetchQuotes();
//         const randomQuote = quotes[0]; // Assuming the API returns an array of quotes
//         setQuote({
//             text: randomQuote.quote,
//             author: randomQuote.author
//         });
//     } catch (error) {
//         console.error('Error loading quotes:', error);
//     } finally {
//         setLoading(false);
//     }
// };

    // const options = {
    //   method: 'GET',
    //   url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
    //   params: {
    //     cat: 'famous',
    //     count: '10'
    //   },
    //   headers: {
    //     'x-rapidapi-key': 'cb2c0f8419msh9973c3c69c76ce0p147a65jsn5c8ff8b19c0e',
    //     'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    

    const quotes = [
      {
          "q": "Imagination is more important than knowledge.",
          "a": "Albert Einstein"
      },
      {
          "q": "Loving thoughts and actions are clearly beneficial for our physical and mental health.",
          "a": "Dalai Lama"
      },
      {
          "q": "Fools read fast. Geniuses reread.",
          "a": "Maxime Lagace"
      },
      {
          "q": "Every great change is preceded by chaos.",
          "a": "Deepak Chopra"
      },
      {
          "q": "Be grateful for what you have now, and nothing should be taken for granted.",
          "a": "Roy T. Bennett"
      },
      {
          "q": "Quality is more important than quantity. One home run is much better than two doubles.",
          "a": "Steve Jobs"
      },
      {
        "q": "The more one judges, the less one loves.",
        "a": "Honore de Balzac",
        "c": "40",
        "h": "<blockquote>&ldquo;The more one judges, the less one loves.&rdquo; &mdash; <footer>Honore de Balzac</footer></blockquote>"
    },
    {
        "q": "If you want to be successful, find someone who has achieved the results you want and copy what they do and you'll achieve the same results.",
        "a": "Tony Robbins",
        "c": "139",
        "h": "<blockquote>&ldquo;If you want to be successful, find someone who has achieved the results you want and copy what they do and you'll achieve the same results.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "Anyone telling you it's pointless to share your perspective is sharing their perspective.",
        "a": "Jack Butcher",
        "c": "89",
        "h": "<blockquote>&ldquo;Anyone telling you it's pointless to share your perspective is sharing their perspective.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
    },
    {
        "q": "We shape clay into a pot, but it is the emptiness inside that holds whatever we want.",
        "a": "Lao Tzu",
        "c": "85",
        "h": "<blockquote>&ldquo;We shape clay into a pot, but it is the emptiness inside that holds whatever we want.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "Be willing to be a beginner every single morning.",
        "a": "Meister Eckhart",
        "c": "49",
        "h": "<blockquote>&ldquo;Be willing to be a beginner every single morning.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
    },
    {
        "q": "Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them.",
        "a": "W. Clement Stone",
        "c": "125",
        "h": "<blockquote>&ldquo;Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them.&rdquo; &mdash; <footer>W. Clement Stone</footer></blockquote>"
    },
    {
        "q": "When you repeat a mistake, it is not a mistake anymore: it is a decision.",
        "a": "Paulo Coelho",
        "c": "73",
        "h": "<blockquote>&ldquo;When you repeat a mistake, it is not a mistake anymore: it is a decision.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
    },
    {
        "q": "The human mind defines things in relation to one another - without light the notion of darkness would be unintelligible.",
        "a": "Josh Waitzkin",
        "c": "120",
        "h": "<blockquote>&ldquo;The human mind defines things in relation to one another - without light the notion of darkness would be unintelligible.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"
    },
    {
        "q": "There is no greater agony than bearing an untold story inside you.",
        "a": "Maya Angelou",
        "c": "66",
        "h": "<blockquote>&ldquo;There is no greater agony than bearing an untold story inside you.&rdquo; &mdash; <footer>Maya Angelou</footer></blockquote>"
    },
    {
        "q": "People who belittle people, will be LITTLE people, and will accomplish very Little",
        "a": "Norman Vincent Peale",
        "c": "82",
        "h": "<blockquote>&ldquo;People who belittle people, will be LITTLE people, and will accomplish very Little&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
    },
    {
      "q": "It's very important to like the people you work with, otherwise life and your job is gonna be quite miserable.",
      "a": "Elon Musk",
      "c": "110",
      "h": "<blockquote>&ldquo;It's very important to like the people you work with, otherwise life and your job is gonna be quite miserable.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
      "q": "The soul should always stand ajar, ready to welcome the ecstatic experience.",
      "a": "Emily Dickinson",
      "c": "76",
      "h": "<blockquote>&ldquo;The soul should always stand ajar, ready to welcome the ecstatic experience.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>"
  },
  {
      "q": "Rudeness is the weak man's imitation of strength.",
      "a": "Eric Hoffer",
      "c": "49",
      "h": "<blockquote>&ldquo;Rudeness is the weak man's imitation of strength.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>"
  },
  {
      "q": "In spite of everything, I shall rise again.",
      "a": "Vincent van Gogh",
      "c": "43",
      "h": "<blockquote>&ldquo;In spite of everything, I shall rise again.&rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>"
  },
  {
      "q": "You know the more one does the more one can do.",
      "a": "Amelia Earhart",
      "c": "47",
      "h": "<blockquote>&ldquo;You know the more one does the more one can do.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>"
  },
  {
      "q": "You are never too old to set another goal or to dream a new dream.",
      "a": "Les Brown",
      "c": "66",
      "h": "<blockquote>&ldquo;You are never too old to set another goal or to dream a new dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
      "q": "Success is a poor teacher.",
      "a": "Robert Kiyosaki",
      "c": "26",
      "h": "<blockquote>&ldquo;Success is a poor teacher.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
  },
  {
      "q": "He who violates another's honor loses his own.",
      "a": "Publilius Syrus",
      "c": "46",
      "h": "<blockquote>&ldquo;He who violates another's honor loses his own.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>"
  },
  {
      "q": "Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.",
      "a": "George Bernard Shaw",
      "c": "100",
      "h": "<blockquote>&ldquo;Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
  },
  {
      "q": "My definition of success is control.",
      "a": "Kenneth Branagh",
      "c": "36",
      "h": "<blockquote>&ldquo;My definition of success is control.&rdquo; &mdash; <footer>Kenneth Branagh</footer></blockquote>"
  },
  {
      "q": "Is it really possible to tell someone else what one feels?",
      "a": "Leo Tolstoy",
      "c": "58",
      "h": "<blockquote>&ldquo;Is it really possible to tell someone else what one feels?&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
  },
  {
      "q": "Don't waste your energy on being angry at something that somebody did six months ago or a year ago. It's over.",
      "a": "Joan Rivers",
      "c": "110",
      "h": "<blockquote>&ldquo;Don't waste your energy on being angry at something that somebody did six months ago or a year ago. It's over.&rdquo; &mdash; <footer>Joan Rivers</footer></blockquote>"
  },
  {
      "q": "Memory is the scribe of the soul.",
      "a": "Aristotle",
      "c": "33",
      "h": "<blockquote>&ldquo;Memory is the scribe of the soul.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
  },
  {
      "q": "The prettiest eyes have cried the most.",
      "a": "Unknown",
      "c": "39",
      "h": "<blockquote>&ldquo;The prettiest eyes have cried the most.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
      "q": "You are what you do, not what you say you'll do.",
      "a": "Carl Jung",
      "c": "48",
      "h": "<blockquote>&ldquo;You are what you do, not what you say you'll do.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
  },
  {
      "q": "We should not look back unless it is to derive useful lessons from past errors.",
      "a": "George Washington",
      "c": "79",
      "h": "<blockquote>&ldquo;We should not look back unless it is to derive useful lessons from past errors.&rdquo; &mdash; <footer>George Washington</footer></blockquote>"
  },
  {
    "q": "Failure is acceptable. Not trying is a whole different ball park.",
    "a": "Michael Jordan",
    "c": "65",
    "h": "<blockquote>&ldquo;Failure is acceptable. Not trying is a whole different ball park.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
},
{
    "q": "If you can't, you must. If you must, you can.",
    "a": "Tony Robbins",
    "c": "45",
    "h": "<blockquote>&ldquo;If you can't, you must. If you must, you can.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
},
{
    "q": "When you consider things like the stars, our affairs don't seem to matter very much, do they?",
    "a": "Virginia Woolf",
    "c": "93",
    "h": "<blockquote>&ldquo;When you consider things like the stars, our affairs don't seem to matter very much, do they?&rdquo; &mdash; <footer>Virginia Woolf</footer></blockquote>"
},
{
    "q": "The only people without problems are those in cemeteries.",
    "a": "Tony Robbins",
    "c": "57",
    "h": "<blockquote>&ldquo;The only people without problems are those in cemeteries.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
},
{
    "q": "The power of man has grown in every sphere, except over himself.",
    "a": "Winston Churchill",
    "c": "64",
    "h": "<blockquote>&ldquo;The power of man has grown in every sphere, except over himself.&rdquo; &mdash; <footer>Winston Churchill</footer></blockquote>"
},
{
    "q": "Do not ignore the passion that burns in you. Spend time to discover your gift.",
    "a": "Steve Harvey",
    "c": "78",
    "h": "<blockquote>&ldquo;Do not ignore the passion that burns in you. Spend time to discover your gift.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
},
{
    "q": "Don't look back - you're not going that way.",
    "a": "Mary Engelbreit",
    "c": "44",
    "h": "<blockquote>&ldquo;Don't look back - you're not going that way.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
},
{
    "q": "It is under the greatest adversity that there exists the greatest potential for doing good, both for oneself and others.",
    "a": "Dalai Lama",
    "c": "120",
    "h": "<blockquote>&ldquo;It is under the greatest adversity that there exists the greatest potential for doing good, both for oneself and others.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"
},
{
    "q": "Confidence comes not from always being right but not fearing to be wrong.",
    "a": "Unknown",
    "c": "73",
    "h": "<blockquote>&ldquo;Confidence comes not from always being right but not fearing to be wrong.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
},
{
    "q": "The whole is greater than the sum of its parts.",
    "a": "Aristotle",
    "c": "47",
    "h": "<blockquote>&ldquo;The whole is greater than the sum of its parts.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
},
{
    "q": "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    "a": "Carl Jung",
    "c": "93",
    "h": "<blockquote>&ldquo;Until you make the unconscious conscious, it will direct your life and you will call it fate.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
},
{
    "q": "Not all readers are leaders, but all leaders are readers.",
    "a": "Harry S. Truman",
    "c": "57",
    "h": "<blockquote>&ldquo;Not all readers are leaders, but all leaders are readers.&rdquo; &mdash; <footer>Harry S. Truman</footer></blockquote>"
},
{
    "q": "You are not what you think you are, You are not what others think you are, You are what you think others think you are.",
    "a": "Unknown",
    "c": "119",
    "h": "<blockquote>&ldquo;You are not what you think you are, You are not what others think you are, You are what you think others think you are.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
},
{
    "q": "Knowledge is a treasure, but practice is the key to it.",
    "a": "Lao Tzu",
    "c": "55",
    "h": "<blockquote>&ldquo;Knowledge is a treasure, but practice is the key to it.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
},
{
    "q": "Because of your smile, you make life more beautiful.",
    "a": "Thich Nhat Hanh",
    "c": "52",
    "h": "<blockquote>&ldquo;Because of your smile, you make life more beautiful.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
},
{
    "q": "Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.",
    "a": "Paulo Coelho",
    "c": "89",
    "h": "<blockquote>&ldquo;Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
},
{
    "q": "The smallest act of kindness is worth more than the greatest intention.",
    "a": "Kahlil Gibran",
    "c": "73",
    "h": "<blockquote>&ldquo;The smallest act of kindness is worth more than the greatest intention.  &rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
},
{
    "q": "Some people don't like change, but you need to embrace change if the alternative is disaster.",
    "a": "Elon Musk",
    "c": "93",
    "h": "<blockquote>&ldquo;Some people don't like change, but you need to embrace change if the alternative is disaster.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
}
  ];


  
  const loadQuotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote({
        text: randomQuote.q,
        author: randomQuote.a
    });
};


    /*
    const loadQuotes = async () => {
      setLoading(true);
      try {
          const response = await axios.get('https://zenquotes.io/api/quotes');
          
          // Assuming the response data is an array of quotes
          const data = response.data;
          
          // Select a random quote from the array
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomQuote = data[randomIndex];

          setQuote({
              text: randomQuote.q, // Assuming 'q' is the key for quote text
              author: randomQuote.a // Assuming 'a' is the key for author
          });
      } catch (error) {
          console.error('Error fetching quote:', error);
          setQuote({
              text: "Failed to load quote",
              author: "Error"
          });
      } finally {
          setLoading(false);
      }
  };
*/





    const [quote, setQuote] = useState({
        text:"Where There is a will there is a way.",
        author:"J.K. Rowling"
    
})

const [loading, setLoading] = useState(false);




const shareOnTwitter = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
  )}`;
  window.open(twitterUrl, '_blank');
};


    // Load initial quote when component mounts
    React.useEffect(() => {
      loadQuotes();
  }, []);



  return (

<Container>
<QuoteWrapper>
  <OpenQuote>&ldquo;</OpenQuote>
  <blockquote>
    <QuoteText>
      {/* If you find an element of your interface requires instructions, then you need to redesign it. */}
      {loading ? "Loading..." : quote.text}
    </QuoteText>
    <Author>
      {/* — Dan Rubin */}
      {loading ? "..." : quote.author}
    </Author>
  </blockquote>
  <CloseQuote>&rdquo;</CloseQuote>

  <Divider />

    
  <IconWrapper>
          <IconButton aria-label="Refresh quote" onClick={loadQuotes}>
            <RefreshCw size={24} />
          </IconButton>
          <IconButton aria-label="Share on X (formerly Twitter)" onClick={shareOnTwitter}>
            <Twitter size={24} />
          </IconButton>
        </IconWrapper>


</QuoteWrapper>
</Container>
  )
}

export default RandomQuote
