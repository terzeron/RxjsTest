const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.range(0, 5)
    .do(function (x) {
            console.log('Do Next: %s', x);
        },
        function (err) {
            console.log('Do Error: %s', err);
        },
        function () {
            console.log('Do Completed');
        });

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