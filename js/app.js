( function() {

  var totalPriceLabel = document.querySelector( '.total-price' );
  var submitButton = document.querySelector( '#product-code-submit-button' );

  submitButton.addEventListener( 'click', clickHandler );


  function clickHandler() {
    var productCodesInput = document.querySelector( '#product-code-input' ).value;
    displayTotal( checkout( productCodesInput ) );
    submitButton.removeEventListener();
  }

  function checkout ( productCodesInput ) {
    return register.calculateTotal( register.parseProductCodes( productCodesInput ) );
  }

  function displayTotal( total ) {
    totalPriceLabel.textContent = "$" + total;
  }

})();
