const Rx = require('@reactivex/rxjs');
const fs = require('fs');

const rename = Rx.Observable.bindNodeCallback(fs.rename);
const source = rename('file1.txt', 'file2.txt');

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