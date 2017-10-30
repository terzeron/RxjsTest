var Rx = require('@reactivex/rxjs');

var source = Rx.Observable
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

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });