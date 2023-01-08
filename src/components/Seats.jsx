import React from "react";

function Seats(){
    return (<div>
    <div class="row">
      {/* <!-- Create left side seats --> */}
      <div class="seat available" data-seat-number="1A"></div>
      <div class="seat occupied" data-seat-number="1B"></div>
      {/* <!-- Create gap between left and right seats --> */}
      <div style="flex: 0 0 50px;"></div>
      {/* <!-- Create right side seats --> */}
      <div class="seat occupied" data-seat-number="1D"></div>
      <div class="seat available" data-seat-number="1E"></div>
      <div class="seat occupied" data-seat-number="1F"></div>
      {/* <!-- Add more rows as needed --> */}
    </div>
    <div class="row">
      {/* <!-- Create left side seats --> */}
      <div class="seat occupied" data-seat-number="2A"></div>
      <div class="seat available" data-seat-number="2B"></div>
      {/* <!-- Create gap between left and right seats --> */}
      <div style="flex: 0 0 50px;"></div>
      {/* <!-- Create right side seats --> */}
      <div class="seat available" data-seat-number="2D"></div>
      <div class="seat occupied" data-seat-number="2E"></div>
      <div class="seat available" data-seat-number="2F"></div>
      {/* <!-- Add more rows as needed --> */}
    </div>
     <div class="row">
      {/* <!-- Create left side seats --> */}
      <div class="seat available" data-seat-number="3A"></div>
      <div class="seat occupied" data-seat-number="3B"></div>
      {/* <!-- Create gap between left and right seats --> */}
      <div style="flex: 0 0 50px;"></div>
      {/* <!-- Create right side seats --> */}
      <div class="seat occupied" data-seat-number="3D"></div>
      <div class="seat available" data-seat-number="3E"></div>
      <div class="seat occupied" data-seat-number="3F"></div>
      {/* <!-- Add more rows as needed --> */}
    </div>
     <div class="row">
      {/* <!-- Create left side seats --> */}
      <div class="seat available" data-seat-number="4A"></div>
      <div class="seat occupied" data-seat-number="4B"></div>
      {/* <!-- Create gap between left and right seats --> */}
      <div style="flex: 0 0 50px;"></div>
      {/* <!-- Create right side seats --> */}
      <div class="seat occupied" data-seat-number="4D"></div>
      <div class="seat available" data-seat-number="4E"></div>
      <div class="seat occupied" data-seat-number="4F"></div>
      {/* <!-- Add more rows as needed --> */}
    </div>
     <div class="row">
      {/* <!-- Create left side seats --> */}
      <div class="seat available" data-seat-number="5A"></div>
      <div class="seat occupied" data-seat-number="5B"></div>
      {/* <!-- Create gap between left and right seats --> */}
      <div style="flex: 0 0 50px;"></div>
      {/* <!-- Create right side seats --> */}
      <div class="seat occupied" data-seat-number="5D"></div>
      <div class="seat available" data-seat-number="5E"></div>
      <div class="seat occupied" data-seat-number="5F"></div>
      {/* <!-- Add more rows as needed --> */}
    </div>
      {/* <!-- Create booked seat --> */}
      <div class="seat occupied rechange" data-seat-number="Booked"></div>
      {/* <!-- Create available seat --> */}
      <div class="seat available rechange"data-seat-number="Available"></div>
   
    <button id="reset-button">Confirm</button>
    </div>

    );
}

export default Seats;