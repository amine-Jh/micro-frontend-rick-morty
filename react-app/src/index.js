import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class EvilPlanElement extends HTMLElement {
  _selectedvalue = "0";

  _toggle = false;

  _artistname = "test";

  get artistname() {
    return this._artistname;
  }

  set artistname(value) {
    this._plan = value;
    ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: this._toggle ,artistName : this._artistname } }/>, this);
  }

  get selectedvalue() {
    return this._selectedvalue;
  }

  set toggle(value) {
    this._plan = value;
    ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: this._toggle,artistName : this._artistname  } }></App>, this);
  }

  get toggle() {
    return this._toggle;
  }

  set selectedvalue(value) {
    this._plan = value;
    ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: true ,artistName : this._artistname } }></App>, this);
  }

  // only changes to these HTML attributes will trigger `attributeChangedCallback` method
  static get observedAttributes() {
    return ["selectedvalue","toggle","artistname"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // when someone changes HTML or does element.setAttribute('ransom', '1 million dollars')
    switch (name) {
      
      case "selectedvalue":
        // it doesn't have to match JS property name on the element
        // newValue is always a string
        this._selectedvalue = newValue;
        ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: this._toggle ,artistName : this._artistname } }></App>, this);
        return;
      
      case "toggle":
          this._toggle = newValue;
          ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: this._toggle,artistName : this._artistname  } }></App>, this);
          return;
      case "artistname":
            this._artistname=newValue;
            ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: this._toggle,artistName : this._artistname  } }></App>, this);
            return;
      default:
        // do nothing
        return;
    }
  }

 

  connectedCallback() {
    // every property assigned to the element before your component was defined, is available now
    ReactDOM.render(<App props={ {selectedvalue : this._selectedvalue,toggleval: false , artistName : this._artistname } }/>, this);
  }
}

const tagName = "react-app";

// condition to prevent rerunning on hot module reloads
if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, EvilPlanElement);
}