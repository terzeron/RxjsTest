var Rx = require('@reactivex/rxjs');
var $ = require('jquery');

var input = $('#input');
var source = Rx.Observable.fromEventPattern(
    function add(h) {
        input.bind('click', h);
    },
    function remove(h) {
        input.unbind('click', h);
    }
);
    

var subscription = source.subscribe(
    function(x) {
        console.log("Next:", x);
    },
    function(err) {
        console.log("Error:", err);
    },
    function() {
        console.log("Completed");
    }
);

input.trigger('click');
