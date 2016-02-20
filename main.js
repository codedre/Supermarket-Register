productData = [
  {
    productName: 'Cereal',
    productCode: 'A12T-4GH7Y-QPL9-3N4MA',
    productPrice: 3.46
  },
  {
    productName: 'Chicken',
    productCode: 'E5T6-9UIZ3-TH15-QR88',
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

var totalPriceLabel = document.querySelector('.total-price');
totalPriceLabel.textContent = '$0';
var submitButton = document.querySelector('#product-code-submit-button');
// Listen for the submit button to be clicked and
submitButton.addEventListener('click', function() {

  var productCodes = document.querySelector('#product-code-textarea').value;
  var codesArray = productCodes.toUpperCase().split(";");
  console.log(codesArray);
  displayTotal(calculateTotal(codesArray));



  submitButton.removeEventListener();

});

function calculateTotal(codesArray) {
  var total = 0;

  // check to see if there is a product to match each entered code
  codesArray.forEach(function(code){
    for (var i = 0; i < productData.length; i++) {

      // If a match is found grab the price and update the total
      if (productData[i].productCode === code) {
        total += productData[i].productPrice;
        break;
      }

    }

  });

  return total;
}


function displayTotal(total) {
  console.log(totalPriceLabel);
  totalPriceLabel.textContent = "$" + total;
}


//TODO - make product model and json files for adding new items
//TODO - make sure to check for edge cases on inputs and where values need to !null
