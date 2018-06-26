const Rx = require('@reactivex/rxjs');

const source1 = Rx.Observable.of('Hello');
const source2 = Rx.Observable.of('World');
const source3 = Rx.Observable.of('Goodbye');
const source4 = Rx.Observable.of('World!');

const example = Rx.Observable.zip(source1, source2.delay(1000), source3.delay(2000), source4.delay(3000));

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