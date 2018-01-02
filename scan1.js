var Rx = require('@reactivex/rxjs');
var fs = require('fs');

const subject = new Rx.Subject();
// 0에서 시작해서 acc에 curr값을 더하는 accumulator를 만듬
const example = subject.startWith(0).scan((acc, curr) => acc + curr);
const subscription = example.subscribe(v => console.log("Accumulated sum:", v));
// subject에 1, 2, 3, 4, 5, 6을 차례대로 넣으면
// example은 0 + 1, 0 + 1 + 2, 0 + 1 + 2 + 3, 0 + 1 + 2 + 3, ... 을 생성함
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
subject.next(6);
                                   

