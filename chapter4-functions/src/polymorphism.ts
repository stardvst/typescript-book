type FilterWithout = {
  (array: number[], f: (item: number) => boolean): number[];
  (array: string[], f: (item: string) => boolean): string[];
  (array: object[], f: (item: object) => boolean): object[];
};

let filterWithout: FilterWithout = (array: any, f: any) => {
  return array.filter(f);
};

let names = [{ name: 'John' }, { name: 'Mary' }, { name: 'Peter' }];
// let result = filterWithout(names, _ => _.name.startsWith('M'));

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = <T>(array: T[], f: (item: T) => boolean): T[] => {
  return array.filter(f);
};

console.log(filter(names, _ => _.name.startsWith('M')));
