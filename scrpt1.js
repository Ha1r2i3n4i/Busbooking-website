// step-1 get reference to DOM elements

// get a reference to main container
const container = document.querySelector(".container");

// get a reference of all available seats
const seats = document.querySelectorAll(".row .seat:not(.sold)");

// get a reference of count and the total elements
const count = document.getElementById("count");
const total = document.getElementById("total");

// step-2 add event listeners

// event listener for seat clicks
container.addEventListener("click", (e) => {
  // check if a seat is clicked and not sold
  if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
    // toggle seat selection
    e.target.classList.toggle("selected");
    // update display count and total
    updateSelectedCount();
  }
});

// step-3 define function to update selected count and total

function updateSelectedCount() {
  // get all selected seats
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // calculate selected seat count
  const selectedSeatsCount = selectedSeats.length;

  // update UI with selected seats count and total price
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// step-4 initialize ticket price
let ticketPrice = 100; // assuming a fixed ticket price of 100 for each seat

updateSelectedCount();