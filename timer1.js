const Rx = require('@reactivex/rxjs');

const source = Rx.Observable
    // 200ms 후부터, 100ms마다 
    .timer(200, 100)
    // TimeInterval { value: 일련번호, interval: 104 }같은 형태의 자료로 변환
    .timeInterval()
    // 일치하는 키(interval)에 해당하는 값만 추출
    .pluck('interval')
    .take(3);

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