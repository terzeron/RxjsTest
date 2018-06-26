var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.timer(0, 50)
    // 바로 시작해서 50ms마다 생성하는 타이머
    .buffer(function () {
        // 125ms 후에 시작하는 타이머
        return Rx.Observable.timer(125);
    })
    .take(3);

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
