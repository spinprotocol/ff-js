import curry from "./curry";

export default curry(function delay(time, a) {
    return new Promise(resolve => setTimeout(() => resolve(a), time));
});