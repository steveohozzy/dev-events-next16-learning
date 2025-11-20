'use client';

import { createBooking } from "@/lib/actions/booking.actions";
import posthog from "posthog-js";
import { useState } from "react"

const BookEvent = ({eventId, slug}: {eventId: string, slug: string}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {success} = await createBooking({eventId, slug, email})

    if (success) {
      setSubmitted(true);
      posthog.capture('event_booked', {eventId, slug, email});
    } else {
      console.error('booking creation failed');
      posthog.captureException('booking creation failed');
    }
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