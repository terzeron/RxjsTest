const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.interval(1000);
// 0 .. 1 .. 2 .. 3 ..

const example = source.sample(Rx.Observable.interval(2000));
// 0 .. 2 .. 4 .. 6 ..

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