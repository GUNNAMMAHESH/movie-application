import React from 'react';

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <p>Movie: {bookingDetails.movieTitle}</p>
      <p>Showtime: {bookingDetails.showtime}</p>
      <p>Seats: {bookingDetails.seats.join(', ')}</p>
      <p>Total Price: ${bookingDetails.totalPrice}</p>
    </div>
  );
};

export default BookingConfirmation;
