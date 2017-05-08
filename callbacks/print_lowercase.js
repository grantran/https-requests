var func = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  var lower = html.toLowerCase();
  console.log(lower);
}

func(requestOptions, printLowerCase)