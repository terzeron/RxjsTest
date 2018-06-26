var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const source = Rx.Observable.range(1, 5)
    .map(function (x, idx, obs) {
        return x * x;
    });

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