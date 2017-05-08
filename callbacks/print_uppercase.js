var func = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

func(requestOptions, printUpperCase)