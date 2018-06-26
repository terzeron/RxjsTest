var Rx = require('@reactivex/rxjs');

Rx.Observable.from({length: 5}).map(function(v, k) { return v + " => " + k; }).subscribe(
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