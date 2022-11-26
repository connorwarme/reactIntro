import React from 'react';
import './App.css';

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
    const updatedTasks = this.state.tasks.concat('item 1');
    this.setState({tasks: updatedTasks})
  }

  render() {
    return (
      <form>
        <h1>{this.state.value}</h1>
        <h2>{this.state.tasks}</h2>
        <input placeholder='Enter Task'></input>
        <div className='sub' onClick={this.onBtnClick}>Submit</div>
      </form>
    )
  }
}

export default App;
