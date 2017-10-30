var Rx = require('@reactivex/rxjs');

var s = new Set(['foo', 'window']);

Rx.Observable.from(s).subscribe(
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
