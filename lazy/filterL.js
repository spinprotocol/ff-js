import go1 from '../base/go1';

export default function *filterL(f, iter) {
    for (const a of iter) if(go1(a, f)) yield a;
}