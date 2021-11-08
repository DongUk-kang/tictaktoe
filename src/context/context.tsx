import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider } = Context; 

function Provider extends Component {
  state = {
    value: null
  }
}