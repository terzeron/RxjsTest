var Rx = require('@reactivex/rxjs');

var m = new Map([[1, 2], [2, 4], [4, 8]]);

Rx.Observable.from(m).subscribe(
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
