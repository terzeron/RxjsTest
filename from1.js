var Rx = require('@reactivex/rxjs');

function f() {
    return Rx.Observable.from(arguments);
}

f(1, 2, 3).subscribe(
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
