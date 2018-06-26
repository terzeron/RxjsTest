var Rx = require('@reactivex/rxjs');

function f() {
    return Rx.Observable.from(arguments);
}

f(1, 2, 3).subscribe(
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