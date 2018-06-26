const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const exists = Rx.Observable.bindCallback(fs.exists);
const source = exists('file.txt');

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