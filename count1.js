const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.from([1, 3, 5, 7, 9, 2, 4, 6, 8, 1])
    .count();

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