var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.never();

var subscription = source.subscribe(
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
