const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.interval(1000);

const example = source.mergeMap(val => {
    if (val > 2) {
        return Rx.Observable.throwError('Error');
    }
    return Rx.Observable.of(val);
})
    .retry(2);

const subscription = example.subscribe(
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