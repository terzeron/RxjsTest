const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
];

const source = Rx.Observable.from(people)
      .groupBy(person => person.age)
      .mergeMap(group => group.toArray());

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