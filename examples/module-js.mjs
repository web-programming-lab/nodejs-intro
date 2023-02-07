export class Test {
  hello(name) {
    console.log(name);
  }
}

export function testFn(...args) {
  args.forEach((arg) => console.log(arg));
}
