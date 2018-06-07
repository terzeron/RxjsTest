var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.of(42, 24, 42, 3, 24, 2).distinct();

var subscription = source.subscribe(
    function (x) {
        console.log(new Date(), "Next:%s", x);
    },
    function (err) {
        console.log(new Date(), "Error:", err);
    },
    function () {
        console.log(new Date(), "Completed");
    }
)
