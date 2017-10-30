var Rx = require('@reactivex/rxjs');

Rx.Observable.of(1, 2, 3).map(x => x + '!!!').subscribe(function(x) { console.log(x); });
