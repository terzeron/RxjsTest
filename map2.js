var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const source = Rx.Observable.from([
    { name: 'Joe', age: 30},
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
]);

const example = source.map(person => person.name);

var subscription = example.subscribe(
    function(x) { console.log("Next: " + x); },
    function(err) { console.log("Error: " + err); },
    function() { console.log("Completed"); }
);
