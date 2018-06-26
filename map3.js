const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const source = Rx.Observable.range(1, 5)
    .map(function (x, idx, obs) {
        return x * x;
    });

const subscription = source.subscribe(
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