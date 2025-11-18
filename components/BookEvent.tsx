'use client';

import { useState } from "react"

const BookEvent = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  }
  return (
    <div id="book-event">
      {submitted ? (
        <p>Thank you for booking your spot</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email adress" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button type="submit" className="button-submit" onClick={() => setSubmitted(true)}>Book Spot</button>
        </form>
      )}
    </div>
  )
}

export default BookEvent