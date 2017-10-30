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
    function(x) {
        console.log("Next: " + x);
        console.log(x.foo + " " + x.bar);
    },
    function(err) {
        console.log("Error: " + err);
    },
    function() {
        console.log("Completed");
    }
);

eventEmitter.emit('data', 'baz', 'quux');
