var Rx = require('@reactivex/rxjs');

// emit 0 after 1 second then complete, since no second argument is supplied
const source = Rx.Observable.timer(1000);
// output: 0
const subscribe = source.subscribe(val => console.log(new Date(), "Next:", val));