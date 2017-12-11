var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const subject = new Rx.Subject();
const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
const subscription = example.subscribe(v => console.log("Accumulated sum:", v));

subject.next({name: 'Joe'});
subject.next({age: 30});
subject.next({favoriteLanguage: 'Javascript'});

