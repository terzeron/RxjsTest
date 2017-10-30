//var Rx = require('@reactivex/rxjs');
var Rx = require('rxjs');

var source = Rx.Observable.repeat(42, 3);

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
