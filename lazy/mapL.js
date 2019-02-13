import curry from '../base/curry';
import go1 from '../base/go1';

export default function *mapL(f, iter) {
    for (const a of iter) yield go1(a, f);
}