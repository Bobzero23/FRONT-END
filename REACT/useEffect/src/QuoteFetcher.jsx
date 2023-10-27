import React, { useState } from 'react';
import axios from 'axios';

const category = "love";
const RANDOM_QUOTE_URL = "https://api.api-ninjas.com/v1/quotes?category=" + category;

function QuoteFetcher() {
    const [randomQuote, setRandomQuote] = useState('');

    async function fetchQuote() {
        await axios.get(RANDOM_QUOTE_URL, {
            headers: {
                'X-Api-Key': 'T567QOjUYwtyBCvPJOFiHg==sFoo42jg6qFxi6j3'
                }
        }).then((response) => {
            setRandomQuote(response.data[0].quote)
        }).catch((error) => {
            console.error("Error", error);
        })
    }

    return (
        <div>
            <p>{randomQuote}</p>
            <button onClick={fetchQuote}>Get Quote</button>
        </div>
    );
}

export default QuoteFetcher;
