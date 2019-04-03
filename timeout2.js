const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(42)
    .delay(5000)
    .timeout(200, Promise.resolve(42));
// 실행 단계에서 예외 발생함

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