var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.of(42)
    .mergeMapTo(Rx.Observable.throw(new Error('error!')));

var subscription = source.subscribe(
    function(x) {
        console.log("Next: " + x);
    },
    function(err) {
        console.log("err: " + err);
    },
    function() {
        console.log("Completed");
    }
);