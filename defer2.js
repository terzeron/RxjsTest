var Rx = require('@reactivex/rxjs');

var shouldRun = false;

// if
// false라서 56이 반환됨
var source = Rx.Observable.if(
    function() {
        return shouldRun;
    },
    Rx.Observable.of(42),
    Rx.Observable.of(56)
);

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
    
