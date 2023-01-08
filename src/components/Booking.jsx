import React from "react";

function Booking(){
    return <div>
    <form id="booking-form">
      <h2>Find a Booking</h2>
      <input type="text" placeholder="Current Location" required/>
      <input type="text" placeholder="Destination" required/>
      <input type="date" placeholder="Date" required/>
      <button type="submit">Find Booking</button>
      </form>
    </div>
    
}
export default Booking;