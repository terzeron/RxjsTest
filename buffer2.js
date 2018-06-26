const Rx = require('@reactivex/rxjs');

const openings = Rx.Observable.interval(200);

const source = Rx.Observable
    // 50ms마다 
    .interval(50)
    // openings에서 200ms마다 발생하는데 100ms만큼 더 기다리면서 버퍼링
    .buffer(openings, function (x) {
        return Rx.Observable.timer(x + 100);
    })
    // take의 파라미터 수에 따라 Next 출력 행 수가 달라짐
    .take(4);

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
