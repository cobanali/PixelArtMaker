// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const size = document.getElementById('sizePicker');

// Select grid input
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
  event.preventDefault();/* Prevents page from going to it's original state*/
  makeGrid();
});

// Function for creating and coloring the grid
function makeGrid() {
  grid.innerHTML = "";/*Resets grid to a blank state*/
  let _N_ = document.getElementById('inputHeight').value; 
  let _M_ = document.getElementById('inputWidth').value;

  // Nested loop for creating rows and squares
  for (h = 1; h <= _N_; h++) {
    let row = document.createElement('tr');
    grid.appendChild(row);/* Creates rows*/
    for (w = 1; w <= _M_; w++) {
      let square = document.createElement('td');
      row.appendChild(square);/* Creates squares*/

      // Changes square's background to selected color when clicked
      square.addEventListener('click', function(event) {
        square.style.background = color.value;
      });
    }
  }
}