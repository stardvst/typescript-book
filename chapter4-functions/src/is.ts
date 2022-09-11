type Checker = {
  <T>(l: T, r: T, ...args: T[]): boolean;
};

let is: Checker = <T>(l: T, r: T, ...args: T[]): boolean => {
  return l === r && args.every((v: T) => v === l);
};

console.log(is('string', 'otherstring'));
console.log(is(true, false));
console.log(is(42, 42));
// console.log(is(10, 'foo')); // gives error
// console.log(is(1, [1])); // array not allowed

console.log(is([1], [1, 2], [1, 2, 3]));
console.log(is([1, 2], [1, 2]));
console.log(is(1, 1, 1, 1, 1));
console.log(is('abcd', 'str', 'str'));
