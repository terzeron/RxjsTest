var Rx = require('@reactivex/rxjs');
var fs = require('fs');

var source = Rx.Observable.of(3,5,7)
    .flatMap(
        function(x, i) { return [x, i]; }, // i: index
        //function(x, y, ix, iy) { return x + y + ix + iy; }
        function(x, y, ix, iy) { return "" + x + " " + y + " " + ix + " " + iy; }
    );


var subscription = source.subscribe(
    function(x) { console.log("Next: " + x); },
    function(err) { console.log("Error: " + err); },
    function() { console.log("Completed"); }
);
    
