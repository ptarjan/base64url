var base64 = require('base64'); // provided by https://github.com/pkrumins/node-base64
var assert = require('assert');
var fs     = require('fs');

function base64_url_decode(input) {
    return base64.decode(input.replace(/-/g, '+').replace(/_/g, '/'));
}

var tests = fs.readFileSync(__dirname+"/tests.txt").toString().split("\n");

tests.forEach(function(test) {
    if (!test || test[0] == '#') { return; }
    var line = test.split(" ");
    var data = base64_url_decode(line[1]);
    assert.equal(data, line[2], line[0]);
});
