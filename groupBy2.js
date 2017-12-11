var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
];

const source = Rx.Observable.from(people)
      .groupBy(person => person.age)
      .mergeMap(group => group.toArray());

var subscription = source.subscribe(
    function(x) { console.log("Next:", x); },
    function(err) { console.log("Error:", err); },
    function() { console.log("Completed"); }
);

