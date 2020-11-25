import React from 'react';
import './App.css';
import Header from "./components/header";
// import * as test from './variables/temp';
import {myNamespace} from "myModule";

declare const $ : any;

const fn : myNamespace.test = (name) => {
  console.log(name)
}
function App() {
  const foo:myNamespace.Foo = 'foo';
  console.log(foo);
  fn('test')
  console.log($(document))
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
