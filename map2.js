const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const source = Rx.Observable.from([
    { name: 'Joe', age: 30},
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
]);

const example = source.map(person => person.name);

const subscription = example.subscribe(
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