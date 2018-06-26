const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const source = Rx.Observable.of(3,5,7)
    .flatMap(
        function(x, i) { return [x, i]; }, // i: index
        //function(x, y, ix, iy) { return x + y + ix + iy; }
        function(x, y, ix, iy) { return "" + x + " " + y + " " + ix + " " + iy; }
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