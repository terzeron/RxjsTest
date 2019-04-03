const Rx = require('@reactivex/rxjs');

Rx.Observable.of(1, 2, 3).map(x => x + '!!!').subscribe(
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