const Rx = require('@reactivex/rxjs');
const EventEmitter = require('events').EventEmitter;

const eventEmitter = new EventEmitter();

const source = Rx.Observable.fromEvent(
    eventEmitter,
    'data',
    function(first, second) {
        return { foo: first, bar: second };
    }
);

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

eventEmitter.emit('data', 'baz', 'quux');
