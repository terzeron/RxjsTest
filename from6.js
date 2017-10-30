var Rx = require('@reactivex/rxjs');

Rx.Observable.from({length: 5}).map(function(v, k) { return v + " => " + k; }).subscribe(
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
