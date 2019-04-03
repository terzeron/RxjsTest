const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.timer(0, 1000)
    .timeInterval()
    .map(function(x) {return x.value + ":" + x.interval; })
    .take(5);

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