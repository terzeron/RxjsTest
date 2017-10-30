var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(500).timeInterval().take(3);

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