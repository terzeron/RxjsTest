const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(1, 2, 3);
// const example = source.pipe(startWith(0));
const example = source.startWith('A', 'B', 'C');
// A B C 1 2 3

const subscription = example.subscribe(
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