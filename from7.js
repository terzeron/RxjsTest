var Rx = require('@reactivex/rxjs');
var fs = require('fs');

var exists = Rx.Observable.bindCallback(fs.exists);
var source = exists('file.txt');

var subscription = source.subscribe(
    function (x) {
        console.log(new Date(), "Next:", x);
    },
    function (err) {
        console.log(new Date(), "Error:", err);
    },
    function () {
        console.log(new Date(), "Completed");
    }
);