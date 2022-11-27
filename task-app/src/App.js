import React from 'react';
import './App.css';
import List from './components/Overview';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'empty',
//       tasks: []
//     }
//     this.onBtnClick = this.onBtnClick.bind(this);
//   }
  
//   onBtnClick() {
//     this.setState({value: 'full'});
//     const input = document.querySelector('input');
//     const inputVal = input.value;
//     this.setState({tasks: this.state.tasks.concat(inputVal)});
//     input.value = '';
//   }

//   render() {
//     return (
//       <form>
//         <h1>Learning React via Lists and Events</h1>
//         <input placeholder='Enter Task'></input>
//         <div className='sub' onClick={this.onBtnClick}>Submit</div>
//         <div> Task List:
//           <List tasks={this.state.tasks}/>
//         </div>
//       </form>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    const currentVal = this.state.tasks;
    this.setState({tasks: currentVal.concat(this.state.value)});
    console.log(this.state.value);
    e.preventDefault();
    this.clearInput();
  }
  clearInput() {
    this.setState({value: ''});
    document.querySelector('input[type="text"]').value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          <List tasks={this.state.tasks} />
        </div>
      </div>
    )
  }
}

export default App;
