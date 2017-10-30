var Rx = require('@reactivex/rxjs');

var obj = {
    foo: 42,
    bar: 56,
    baz: 78
};

var source = Rx.Observable.pairs(obj);

var subscription = source.subscribe(
    function(x) {
        console.log("Next: " + x);
    },
    function(err) {
        console.log("Error: " + err);
    },
    function() {
        console.log("Completed");
    }
);

