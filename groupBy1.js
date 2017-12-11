var Rx = require('@reactivex/rxjs');
var fs = require('fs');

var codes = [
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
var source = Rx.Observable.from(codes)
    .groupBy(
        function(x) { return x.keyCode; },
        function(x) { return x.keyCode; }
    );


var subscription = source.subscribe(
    function(o) {
        o.count().subscribe(function(x) {
            console.log("Count: " + x);
        });
    },
    function(err) { console.log("Error: " + err); },
    function() { console.log("Completed"); }
);

