var Rx = require('@reactivex/rxjs');

Rx.Observable.from([1, 2, 3]).map(function(x) { return x+x; }).subscribe(
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