import React from 'react'
import quotes from '../quotes'

const LoadingQuotes = () => {
  const randomQuoteNumber = Math.floor(Math.random() * 45)
  const selectedQuote = quotes[randomQuoteNumber]
    
  const quote = <div className='quote'>
                    <span className='quote-text'>" {selectedQuote.text} "</span> - <span className='quote-author'>{selectedQuote.author}</span>
                </div>

  return (
    <div className='quote-card'>
        {quote}
    </div>
  )
}

export default LoadingQuotes