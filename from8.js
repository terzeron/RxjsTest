var Rx = require('@reactivex/rxjs');
var fs = require('fs');

var rename = Rx.Observable.bindNodeCallback(fs.rename);
var source = rename('file1.txt', 'file2.txt');

var subscription = source.subscribe(
    function(x) {
        console.log("Next: " + x);
    },
    function(err) {
        console.log("Error: " + err);
    },
    function() {
        console.log("Completed");
    }
);