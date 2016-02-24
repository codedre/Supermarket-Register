(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.register = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      for ( var i = 0; i < module.exports.productData.length; i++ ) {

        // If a match is found grab the price and update the total
        if ( module.exports.productData[i].productCode === code ) {
          total += module.exports.productData[i].productPrice;
          break;
        }

      }

    });

    return total;
  },

  productData: [
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
  ]

};

},{}]},{},[1])(1)
});