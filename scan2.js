const Rx = require('@reactivex/rxjs');
const fs = require('fs');

// json 객체에 필드를 추가해가는 예제

const subject = new Rx.Subject();
// empty object에서 시작해서 curr를 필드로 추가하고 acc에 달아둠
const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
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

// key-value pair를 하나씩 넣어주면
// 여러 필드를 가지는 객체가 생성됨
subject.next({name: 'Joe'});
subject.next({age: 30});
subject.next({favoriteLanguage: 'Javascript'});

