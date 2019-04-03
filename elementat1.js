const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(1, 2, 3, 4).elementAt(1);

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