const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.range(0, 10).first(function (x, idx, obs) {
    return x % 2 === 1;
});

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