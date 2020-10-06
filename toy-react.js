

class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  appendChild(component) {
    this.children.push(component);
  }

  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }

}

class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(component) {
    this.root.appendChild(component.root);
  }

}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

function createElement(type, attributes, ...children) {
  let theElem;
  if (typeof type === 'string') {
    theElem = new ElementWrapper(type);
  } else {
    theElem = new type;
  }

  for (let attr in attributes) {
    theElem.setAttribute(attr, attributes[attr]);
  }

  const insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      if (Array.isArray(child)) {
        insertChildren(child)
      } else {
        theElem.appendChild(child);
      }
    }
  }
  insertChildren(children);

  return theElem;
}

function render(component, parentElement) {
  parentElement.appendChild(component.root);
}


export {
  createElement,
  Component,
  render,
};