const Rx = require('@reactivex/rxjs');

// 1초마다 생성되는 source
const source = Rx.Observable.timer(0, 1000);
// 3초 구간의 windows
const example = source
      .window(Rx.Observable.interval(3000));
// window에 대해 0부터 시작해서 1씩 증가시킴 
const count = example
      .scan((acc, curr) => acc + 1, 0);

// count는 3초마다 scan이 실행되어 1씩 늘어나는 값의 연속이 발생함
const subscription1 = count
      .subscribe(
          function (x) {
              console.log(new Date(), "Subscription1 - Next:", x);
          },
          function (err) {
              console.log(new Date(), "Subscription1 - Error:", err);
          },
          function () {
              console.log(new Date(), "Subscription1 - Completed");
          }
      );

// example은 3초 window에 포함된 값들을 merge해서 출력
// window를 merge해도 시간 차는 존재함
const subscription2 = example
      .mergeAll()
      .subscribe(
          function (x) {
              console.log(new Date(), "Subscription2 - Next:", x);
          },
          function (err) {
              console.log(new Date(), "Subscription2 - Error:", err);
          },
          function () {
              console.log(new Date(), "Subscription2 - Completed");
          }
      );