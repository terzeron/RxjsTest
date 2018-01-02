const Rx = require('@reactivex/rxjs');

// 1초마다 정수 연속 생성
const source = Rx.Observable.timer(0, 1000);

// 5초가 될 때 window를 새로 생성
const example = source
      .windowWhen(
          val => Rx.Observable.interval(5000)
      )
      .do(
          () => console.log('new window')
      );

// window 구간에 존재하는 아이템을 merge해서 출력
// window를 merge해도 시간 차는 존재함
const subscription = example
      .mergeAll()
      .subscribe(val => console.log(val));
