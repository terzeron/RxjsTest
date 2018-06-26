const Rx = require('@reactivex/rxjs');

// 1초마다 정수 연속 생성 
const source = Rx.Observable.interval(1000);

// 0.2초씩 시간을 늘려서 그 안에 도착하는 다른 아이템은 중복이라서 버림
// 6이 나오면 6 * 0.2 = 1.2초가 됨
// 그러면 debounce time 1.2초는 아이템 생성 주기인 1초보다 길어져서
// 모든 아이템이 중복된다고 보고 버림
console.log(new Date);
const example = source
      .debounce(
          val => Rx.Observable.timer(val * 200)
      );

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
