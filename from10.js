var Rx = require('@reactivex/rxjs');
var EventEmitter = require('events').EventEmitter;

var eventEmitter = new EventEmitter();

var source = Rx.Observable.fromEvent(
    eventEmitter,
    'data',
    function(first, second) {
        return { foo: first, bar: second };
    }
);

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

eventEmitter.emit('data', 'baz', 'quux');
