var Rx = require('@reactivex/rxjs');

const example = Rx.Observable.of(null);

const message = Rx.Observable.merge(
    example.mapTo('Hello'),
    example.mapTo('World').delay(1000),
    example.mapTo('Goodbye').delay(2000),
    example.mapTo('Bye').delay(3000)
);
// example에 대해 상대적으로 1, 2, 3초의 지연이 발생하므로
// 절대시각으로는 1초마다 하나씩 출력됨
const subscription = message.subscribe(val => console.log(new Date, val));
