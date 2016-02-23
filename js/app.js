( function() {

  productData = [
    {
      productName: 'Cereal',
      productCode: 'A12T-4GH7-QPL9-3N4M',
      productPrice: 3.46
    },
    {
      productName: 'Chicken',
      productCode: 'E5T6-9UI3-TH15-QR88',
      productPrice: 8.18
    },
    {
      productName: 'Pop',
      productCode: 'YRT6-72AS-K736-L4AR',
      productPrice: 1.63
    },
    {
      productName: 'Pizza',
      productCode: 'TQ4C-VV6T-75ZX-1RMR',
      productPrice: 6.78
    },
    {
      productName: 'Tuna',
      productCode: '65P1-UDGM-XH2M-LQW2',
      productPrice: 5.89
    }
  ];

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
