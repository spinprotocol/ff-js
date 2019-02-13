import isPromise from './isPromise'

export default function go1(a, f) {
    return isPromise(a) ? a.then(f) : f(a);
}