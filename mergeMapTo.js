const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(42)
    .mergeMapTo(Rx.Observable.throwError(new Error('error!')));

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