const Rx = require('@reactivex/rxjs');

const obj = {
    foo: 42,
    bar: 56,
    baz: 78
};

const source = Rx.Observable.pairs(obj);

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