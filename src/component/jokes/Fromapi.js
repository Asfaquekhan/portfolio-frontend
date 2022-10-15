import React from 'react'

export default function Fromapi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f4229c445fmshc7791965452982ep1b5797jsn6325f40f5d31',
            'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
        }
    };
    
    fetch('https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>
      {options}
    </div>
  )
}
