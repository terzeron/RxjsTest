const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.from([
        Rx.Notification.createNext('SUCCESS'),
        Rx.Notification.createError('ERROR')
    ])
    .dematerialize();

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