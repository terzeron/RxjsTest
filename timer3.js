var Rx = require('@reactivex/rxjs');

/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
// 1초 후부터 2초마다
const source = Rx.Observable.timer(1000, 2000);

// output: 0,1,2,3,4,5......
const subscribe = source.subscribe(
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