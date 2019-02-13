import take from "./take";

export default function takeAll(iter) {
    return take(Infinity, iter);
}