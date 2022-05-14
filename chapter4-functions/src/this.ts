function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date()));
