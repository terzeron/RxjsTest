const Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(1000);
// 0 .. 1 .. 2 .. 3 ..

var example = source.sample(Rx.Observable.interval(2000));
// 0 .. 2 .. 4 .. 6 ..

var subscription = example.subscribe(
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