declare module "myModule" {
  export namespace myNamespace {
    type Foo = string;
    interface Bar { baz: number; }
    interface test { (name : string) : void }
  }
};