import { createElement, Component, render } from "./toy-react";

class MyComp extends Component {
  constructor() {
    super();
    this.state = {
      fname: 'ikari',
      age: 1,
    }
  }

  render() {
    return <div>
        <h1>{`good day ${this.state.fname}!`}</h1>
        <h2>{`age: ${this.state.age}!`}</h2>
        <button onclick={() => { this.state.age++; this.rerender();}}>add age</button>
        {this.children}
      </div>
  }
}

const stuff = (
  <MyComp id="the-id" class="the-class">
    <div>abc</div>
    <div>efg</div>
    <div>123</div>
  </MyComp>
);

render(stuff, document.body);