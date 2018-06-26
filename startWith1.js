const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.of(1, 2, 3);
// const example = source.pipe(startWith(0));
const example = source.startWith(0);
// 0 1 2 3

const subscription = example.subscribe(
    function(x) {
        console.log("Next:", x);
    },
    function(err) {
        console.log("Error:", err);
    },
    function() {
        console.log("Completed");
    }
);
