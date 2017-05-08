var https = require('https');
function getAndPrintHTML (options) {

  https.get(options, function(response) {

    response.setEncoding('utf8');
    var dataArr = [];
    var i = 0;

    response.on('data', function(data) {
      if (data) {
        dataArr[i] = data;
        console.log(dataArr[i]);
        i += 1;

      }
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);