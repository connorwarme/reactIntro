import React from 'react';
import './App.css';
import List from './components/Overview';


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
    const input = document.querySelector('input');
    const inputVal = input.value;
    this.setState({tasks: this.state.tasks.concat(inputVal)});
    input.value = '';
  }

  render() {
    return (
      <form>
        <h1>Learning React via Lists and Events</h1>
        <input placeholder='Enter Task'></input>
        <div className='sub' onClick={this.onBtnClick}>Submit</div>
        <div> Task List:
          <List tasks={this.state.tasks}/>
        </div>
      </form>
    )
  }
}

export default App;
