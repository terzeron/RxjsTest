var Rx = require('@reactivex/rxjs');

//var source = Rx.Observable.just(42);
var source = Rx.Observable.of(42);

var subscription = source.subscribe(
    function(x) {
        console.log("Next: ", x);
    },
    function(err) {
        console.log("Error: " + err);
    },
    function() {
        console.log("Completed");
    }
);
