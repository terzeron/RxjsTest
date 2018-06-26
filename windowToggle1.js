const Rx = require('@reactivex/rxjs');

// 1초마다 정수 연속 생성
const source = Rx.Observable.timer(0, 1000);
// 5초마다 정수 연속 생성
const toggle = Rx.Observable.interval(5000);

//const s1 = source.subscribe(v => console.log(new Date, v));
//const s2 = toggle.subscribe(v => console.log(new Date, v));

// 5초마다 1초씩 커진 window를 생성
const example = source
      .windowToggle(
          toggle,
          val => Rx.Observable.interval(val * 1000)
      )
      .do(
          () => console.log('new window')
      );

// window 구간에 존재하는 아이템을 merge해서 출력
// window를 merge해도 시간 차는 존재함
const subscription = example
      .mergeAll()
      .subscribe(
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