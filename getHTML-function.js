var https = require('https');

function getHTML (options, callback) {

  var results = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      results += data.toString();
      });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(results);
    });
  });
};

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);