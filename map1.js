var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const source = Rx.Observable.from([1,2,3,4,5]);

const example = source.map(val => val * 10);

var subscription = example.subscribe(
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