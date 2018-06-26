const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.throwError('This is an error');

const example = source.catch(val => Rx.Observable.of(`I caught: ${val}`));

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
