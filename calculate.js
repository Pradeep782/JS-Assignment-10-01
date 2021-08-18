// use strict is used to execute the code in strict mode.

"use strict";

// creating a $ fucnction that fetches the elements of html using the ids.
var $ = function (id) {
  return document.getElementById(id);
};

//creating the function calculateChange that  calculates number of dimes, quaters, nickles, pennies
var calculateChange = function () {
  // declaring the variables.
  var cents, quarter, dime, nickel, pennie;

  // getting the value of number of cents.
  input.cents = Math.floor(parseInt($("cents").value));

  // checking whether the input is valid or not.
  if (input.isValid() == false) {
    // displaying an alert if the entered input is not valid.
    alert("Please enter a valid number between 0 and 99");
  } else {
    // calculating the quarters.
    quarter = input.getNumber(25);

    // calculating the dimes
    dime = input.getNumber(10);

    // calculating the nickles
    nickel = input.getNumber(5);

    //calculating the pennies.
    pennie = input.cents % 5;

    // displaying the quarters value.
    $("quarters").value = quarter;

    // displaying the dimes value.
    $("dimes").value = dime;

    // displaying the nickles value.
    $("nickels").value = nickel;
    // Displaying the pennies value.
    $("pennies").value = pennie;
  }
};
// When the window loads the below function will be executed.

window.onload = function () {
  $("calculate").onclick = calculateChange;
  // using the focus method that shifts the focus on the cents.

  $("cents").focus();
};
