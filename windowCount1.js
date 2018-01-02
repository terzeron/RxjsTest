const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.interval(1000);

// 4개씩 모아서 window 생성
// window 생성 시마다 do()의 callback을 실행
const example = source
      .windowCount(4)
      .do(
          () => console.log('new window')
      );

// window 구간에 존재하는 아이템을 merge해서 출력
// window를 merge해도 시간 차는 존재함
const subscription = example
      .mergeAll()
      .subscribe(val => console.log(val));
