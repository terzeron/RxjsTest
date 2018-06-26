const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.range(0, 10).ignoreElements();
// completed 를 제외한 모든 요소를 무시함

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