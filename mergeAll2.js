const Rx = require('@reactivex/rxjs');

// 0.5초마다 데이터 생성하고 5개만 취함
const interval = Rx.Observable.interval(500).take(5);

/*
console.log(new Date);
const subscription = interval.subscribe(
    function(x) {
        console.log(new Date, "Observable1:", x);
    },
    function(err) {
        console.log("Error:", err);
    },
    function() {
        console.log("Completed");
    }
);
*/

// map( => delay(1s).take(3))
//   timeline
//   0 1 2 3 4 5 6 (second)
//   +-+-+-+-+-+-+-+-+-+-+-+-+-+-
//    0  012
//     1  012
//      2  012 -> mergeAll(3)
//       3    012
//        4    012
// mergeAll(3)은 3개의 observable에 대해 flat하게 merge함
// 그러므로 출력은 다음과 같게 됨
// 01234
//    012
//     012
//      012
//         012
//          012
// 같은 시각에 출력된 건 미묘한 차이로 순서가 뒤바뀔 수 있음
console.log(new Date);
const example = interval
    .map(val => interval.delay(1000).take(3))
    .mergeAll(3);

const subscription = example.subscribe(
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