var base64 = require('base64'); // provided by https://github.com/pkrumins/node-base64
var fs     = require('fs');
var sys    = require('sys');

function base64_url_decode(input) {
    return base64.decode(input.replace(/-/g, '+').replace(/_/g, '/'));
}

var tests = fs.readFileSync(__dirname+'/tests.txt').toString().split("\n");

tests.forEach(function(test) {
    if (!test || test[0] == '#') { return; }
    var line = test.split(" ");
    name = line[0];
    input = line[1];
    output = line[2];
    var data = base64_url_decode(input);
    if (data !== output) {
      sys.puts('node.js: '+name+' failed. '+data+' != '+output);
    }
});
