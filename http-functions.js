module.exports = function getHTML(options, callback) {
  var https = require('https');

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


