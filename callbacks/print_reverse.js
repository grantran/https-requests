var func = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  var rev = html.split("").reverse().join("");
  console.log(rev);
}

func(requestOptions, printReverse)