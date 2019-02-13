import isIterable from "../base/isIterable";
import last from "../base/last";
import toIter from "../base/toIter";
import nop from "../base/nop";

export default function flatL(iter, depth = 1) {
    const iterStack = [toIter(iter)];
    return {
    next: function recur() {
        const iter = last(iterStack);
        if (!iter) return { done: true };
        const cur = iter.next();
        if (cur.done) {
            iterStack.pop();
            return recur();
        } else if (iterStack.length <= depth && isIterable(cur.value) && typeof cur.value != 'string') {
            iterStack.push(cur.value[Symbol.iterator]());
            return recur();
        } else if (cur.value instanceof Promise) {
        return {
            value: cur.value.then(value => {
                if (iterStack.length > depth || !isIterable(value) || typeof value == 'string') return value;
                const iter = value[Symbol.iterator](), cur = iter.next();
                return cur.done ? Promise.reject(nop) : (iterStack.push(iter), cur.value);
            }),
            done: false
        };
        } else {
            return cur;
        }
    },
    [Symbol.iterator]() { return this; }
    };
}