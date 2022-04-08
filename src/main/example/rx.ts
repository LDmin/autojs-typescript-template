import { of, interval } from "rxjs";
import { mergeMap, map } from "rxjs/operators";

const letters = of("a", "b", "c");
const result = letters.pipe(
  mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
);
result.subscribe((x) => toast(x));
