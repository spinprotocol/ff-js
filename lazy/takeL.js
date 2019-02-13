import curry from "../base/curry";

export default curry(function *takeL(l, iter) {
    for (const a of iter) {
        if (a instanceof Promise) yield a.then(a => (--l, a));
        else yield (--l, a);
        if (!l) break;
    }
});