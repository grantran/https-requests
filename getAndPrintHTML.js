var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

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

getAndPrintHTML();