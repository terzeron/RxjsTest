var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const subject = new Rx.Subject();
const example = subject.startWith(0).scan((acc, curr) => acc + curr);
const subscription = example.subscribe(v => console.log("Accumulated sum:", v));
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
subject.next(6);
                                   

