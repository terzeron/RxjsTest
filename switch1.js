const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.range(0, 3)
    //.select(function (x) {
    .map(function (x) {
        return Rx.Observable.range(x, 3);
    })
    .switch();
// range(0, 3) -> 0 1 2
// -> range(0, 3) -> 0 1 2
// -> range(1, 3) -> 1 2 3
// -> range(2, 3) -> 2 3 4
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