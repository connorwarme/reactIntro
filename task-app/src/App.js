import React from 'react';
import './App.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input placeholder='Enter Task'></input>
    )
  }
}

class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type='submit'>Submit</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'empty'
    }
  }

  onClick() {

  }
  render() {
    return (
      <form>
        <Input />
        <Submit />
      </form>
    )
  }
}

export default App;
