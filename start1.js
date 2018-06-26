var Rx = require('@reactivex/rxjs');

var context = { value: 42 };

// rxjs 5.x에서 지원하지 않음
var source = Rx.Observable.start(
    function() {
        return this.value;
    },
    context,
    Rx.Scheduler.timeout
);

var subscription = source.subscribe(
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