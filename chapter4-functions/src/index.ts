function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

function sumVariadic(): number {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([1, 2, 3, 4, 5]));
// console.log(sumVariadic(1, 2, 3, 4, 5));
console.log(sumVariadicSafe(1, 2, 3, 4, 5));
