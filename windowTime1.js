const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.timer(0, 1000);

// 3초짜리 window 생성
const example = source
      .windowTime(3000)
      .do(
          () => console.log('new window')
      );

// window 구간에 존재하는 아이템을 merge해서 출력
// window를 merge해도 시간 차는 존재함
const subscription = example
      .mergeAll()
      .subscribe(val => console.log(val));
