interface Test {
  foo: string;
}

const foo = () => {
  console.log('hello world');
  console.log('new');
};

export type { Test };
export { foo };
