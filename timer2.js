const Rx = require('@reactivex/rxjs');

// emit 0 after 1 second then complete, since no second argument is supplied
const source = Rx.Observable.timer(1000);
// output: 0
const subscribe = source.subscribe(
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
