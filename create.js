var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.create(function (observer) {
    //observer.onNext(42);
    //observer.onCompleted();
    observer.next(42);
    observer.complete();

    // Note that this is optional, you do not have to return this if you require no cleanup
    return function () { console.log('disposed'); };
});

var subscription = source.subscribe(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });