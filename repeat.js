const Rx = require('@reactivex/rxjs');

// 실행 안 됨
const source = Rx.Observable.range(12, 3)
    .repeat(3);

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