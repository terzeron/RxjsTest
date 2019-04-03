const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(42, 24, 42, 3, 24, 2).distinct();

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