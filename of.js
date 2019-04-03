const Rx = require('@reactivex/rxjs');

//const source = Rx.Observable.just(42);
const source = Rx.Observable.of(42);

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