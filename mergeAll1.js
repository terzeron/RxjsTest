var Rx = require('@reactivex/rxjs');

const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
const source = Rx.Observable.of(1, 2, 3);

const example = source
      .map(val => myPromise(val))
      .mergeAll();

const subscription = example.subscribe(val => console.log(val));
