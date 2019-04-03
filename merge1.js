const Rx = require('@reactivex/rxjs');

const firstSource = Rx.Observable.interval(2500);
// 0....1....2....3....

const secondSource = Rx.Observable.interval(2000);
// 0...1...2...3...

const thirdSource = Rx.Observable.interval(1500);
// 0..1..2..3..

const fourthSource = Rx.Observable.interval(1000);
// 0.1.2.3.

//const example = firstSource.pipe(Rx.Observable.merge(secondSource));
const example = Rx.Observable.merge(firstSource.mapTo('A'), secondSource.mapTo('B'), thirdSource.mapTo('C'), fourthSource.mapTo('D'));

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