const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.from([1, 3, 5, 7, 9, 2, 4, 6, 8, 1])
    .max(function (x, y) {
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        }
        return 0;
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