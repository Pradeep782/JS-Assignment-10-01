// use strict is used to execute the code in strict mode.

"use strict";

var input = {
  cents: 0,
  // validating the input.
  isValid: function () {
    if (this.cents < 0 || this.cents > 99) {
      return false;
    } else {
      return true;
    }
  },

  getNumber: function (divide) {
    //calculating the  of quaters, nickels, dimes, pennies
    var input = this.cents / divide;
    if (this.cents > 0) {
      this.cents = this.cents % divide;
    }

    return Math.floor(input);
  },
};
