const Rx = require('@reactivex/rxjs');

const m = new Map([[1, 2], [2, 4], [4, 8]]);

Rx.Observable.from(m).subscribe(
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