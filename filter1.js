const Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(0, 5).filter(function (x, idx, obs) {
    return x % 2 === 0;
});

var subscription = source.subscribe(
    function (x) {
        console.log("Next:", x);
    },
    function (err) {
        console.log("Error:", err);
    },
    function () {
        console.log("Completed");
    }
);
