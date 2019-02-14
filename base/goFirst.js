import isPromise from "./isPromise"

export default function goFirst(a, f) {
    return isPromise(a) ? a.then(f) : f(a);
}