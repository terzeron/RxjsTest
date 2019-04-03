const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.interval(500).timeInterval().take(3);

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