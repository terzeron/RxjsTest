var Rx = require('@reactivex/rxjs');

var firstSource = Rx.Observable.interval(2500);
// 0....1....2....3....

var secondSource = Rx.Observable.interval(2000);
// 0...1...2...3...

var thirdSource = Rx.Observable.interval(1500);
// 0..1..2..3..

var fourthSource = Rx.Observable.interval(1000);
// 0.1.2.3.

//var example = firstSource.pipe(Rx.Observable.merge(secondSource));
var example = Rx.Observable.merge(firstSource.mapTo('A'), secondSource.mapTo('B'), thirdSource.mapTo('C'), fourthSource.mapTo('D'));

var subscription = example.subscribe(
    function (x) {
        console.log("Next:", x);
    },
    function (err) {
        console.log("Error:", err);
    },
    function () {
        console.log("Completed");
    }
);
