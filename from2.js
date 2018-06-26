var Rx = require('@reactivex/rxjs');

var s = new Set(['foo', 'window']);

Rx.Observable.from(s).subscribe(
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