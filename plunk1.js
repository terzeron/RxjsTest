const Rx = require('@reactivex/rxjs');

const source = Rx.Observable
    .from([{
            value: 0
        },
        {
            value: 1
        },
        {
            value: 2
        }
    ])
    .pluck('value');

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