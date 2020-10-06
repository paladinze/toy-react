import { createElement, Component, render } from "./toy-react";

class MyComp extends Component {
  render() {
    return <div>
        <h1>good day!</h1>
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