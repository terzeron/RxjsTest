var Rx = require('@reactivex/rxjs');

/* Using an observable sequence */
// observer가 subscribe하기 전까지는 생성하지 않다가 observer가 subscribe하면 생성함
var source = Rx.Observable.defer(function () {
    return Rx.Observable.of(42);
});

setTimeout(function() {
    var subscription = source.subscribe(
        function (x) { console.log("Next:", x); },
        function (err) { console.log("Error:", err); },
        function () { console.log('Completed'); } );
}, 3000);

setTimeout(function() {
    var subscription = source.subscribe(
        function (x) { console.log("Next:", x); },
        function (err) { console.log("Error:", err); },
        function () { console.log('Completed'); } );
}, 5000);
