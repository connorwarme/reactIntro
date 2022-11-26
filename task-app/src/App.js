import React from 'react';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.tasks.map(
          (task, index) => {
            return (
              <li key={index}>{task}</li>
            )
          }
        )}
      </ul>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'empty',
      tasks: []
    }
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    this.setState({value: 'full'});
    const inputVal = document.querySelector('input').value;
    this.setState({tasks: this.state.tasks.concat(inputVal)});
  }

  render() {
    return (
      <form>
        <h1>{this.state.value}</h1>
        <h2>{this.state.tasks}</h2>
        <input placeholder='Enter Task'></input>
        <div className='sub' onClick={this.onBtnClick}>Submit</div>
        <div>
          <List tasks={this.state.tasks}/>
        </div>
      </form>
    )
  }
}

export default App;
