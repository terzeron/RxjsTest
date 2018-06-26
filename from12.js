var Rx = require('@reactivex/rxjs');
var RSVP = require('rsvp');

var promise = new RSVP.Promise(function(resolve, reject) {
    resolve(42);
});

var source = Rx.Observable.fromPromise(promise);

var subscription = source.subscribe(
    function (x) {
        console.log(new Date(), "Next:", x);
    },
    function (err) {
        console.log(new Date(), "Error:", err);
    },
    function () {
        console.log(new Date(), "Completed");
    }
);
