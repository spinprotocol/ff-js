import take from "./take";
import goFirst from "./goFirst";

export default function head(iter) {
    return goFirst(take(1, iter), ([h]) => h);
}