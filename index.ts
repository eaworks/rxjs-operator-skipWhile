import { interval, skipWhile } from 'rxjs';

// icerisindeki kosul turu olursa icerisinde gosterilen deger kadar atlama yapar

const source = interval(1000);
const example = source.pipe(skipWhile((val) => val < 5));
example.subscribe((val) => console.log(val));
