type AllowedTypes = string | boolean | number;

type Checker = {
  <T extends AllowedTypes>(l: T, r: T): boolean;
};

let is: Checker = <T>(l: T, r: T): boolean => {
  return l === r;
};

console.log(is('string', 'otherstring'));
console.log(is(true, false));
console.log(is(42, 42));
// console.log(is(10, 'foo')); // gives error
// console.log(is([1], [1])); // array not allowed
// console.log(is(1, [1])); // array not allowed

type MultiChecker = {
  <T>(...args: T[]): boolean;
};

let multi_is: MultiChecker = <T>(...args: T[]): boolean => {
  return args.every((v: T) => v === args[0]);
};

console.log(multi_is([1], [1, 2], [1, 2, 3]));
console.log(multi_is(1, 1, 1, 1, 1));
console.log(multi_is('abcd', 'str', 'str'));
