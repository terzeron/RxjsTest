const Rx = require('@reactivex/rxjs');

const shouldRun = false;

// if
// false라서 56이 반환됨
const source = Rx.Observable.if(
    function() {
        return shouldRun;
    },
    Rx.Observable.of(42),
    Rx.Observable.of(56)
);

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
