import curry from '../base/curry';
import goFirst from '../base/goFirst';
import nop from '../base/nop';
import isPromise from '../base/isPromise';
import toIter from '../base/toIter';

export default curry(function *filterL(f, iter) {
  for (const a of toIter(iter)) {
    const b = goFirst(a, f);
    if (isPromise(b)) yield b.then(b => b ? a : Promise.reject(nop));
    else if (b) yield a;
  }
});