const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const codes = [
    { keyCode: 38 }, // up
    { keyCode: 38 }, // up
    { keyCode: 40 }, // down
    { keyCode: 40 }, // down
    { keyCode: 37 }, // left
    { keyCode: 39 }, // right
    { keyCode: 37 }, // left
    { keyCode: 39 }, // right
    { keyCode: 66 }, // b
    { keyCode: 65 }  // a
];
const source = Rx.Observable.from(codes)
    .groupBy(
        function(x) { return x.keyCode; },
        function(x) { return x.keyCode; }
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