module.exports = {
  parseProductCodes: function( productCodesInput ) {

    var regex = /^((\w{4})-){3}(\w{4})$/;
    var productCodesArray = productCodesInput.toUpperCase().split( /;/ );

    // Validate each code entered
    productCodesArray.forEach( function( value ) {
      if( !regex.exec( value ) && value !== "") {
        throw new Error( 'One or more of the product codes you entered is not valid' );
      } else if( value === "") {
        productCodesArray.pop();
      }
    });
    return productCodesArray;
  },

  calculateTotal: function( productCodesArray ) {
    var total = 0;

    // check to see if there is a product to match each entered code
    productCodesArray.forEach( function( code ) {
      for ( var i = 0; i < productData.length; i++ ) {

        // If a match is found grab the price and update the total
        if ( productData[i].productCode === code ) {
          total += productData[i].productPrice;
          break;
        }

      }

    });

    return total;
  }
};
