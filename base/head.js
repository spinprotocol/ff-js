import take from "./take";
import go1 from "./go1";

export default function head(iter) {
    return go1(take(1, iter), ([h]) => h);
}