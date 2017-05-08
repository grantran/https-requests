var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response) {

    response.setEncoding('utf8');

    var dataArr = [];
    var i = 0;

    response.on('data', function(data) {
      if (data) {
        dataArr[i] = data;
        printHTML(data);
        i += 1;

      }
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })


}

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML());