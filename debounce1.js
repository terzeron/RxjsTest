const Rx = require('@reactivex/rxjs');

// 문자열 연속을 생성
const source = Rx.Observable.of('wait', 'one', 'second', 'last will display');

// debounce time은 1초이고 이 시간 안에 들어오는 다른 아이템은 중복이라고 판단하고 버림
// 마지막 아이템이 생성된 시각을 기준으로 함
console.log(new Date);
const example = source
      .debounce(
          () => Rx.Observable.timer(1000)
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
