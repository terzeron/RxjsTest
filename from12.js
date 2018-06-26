const Rx = require('@reactivex/rxjs');
const RSVP = require('rsvp');

const promise = new RSVP.Promise(function(resolve, reject) {
    resolve(42);
});

const source = Rx.Observable.fromPromise(promise);

const subscription = source.subscribe(
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
