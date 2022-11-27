import React from 'react';
import './App.css';
// import List from './components/Overview';
import Overview from './components/Overview';


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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       tasks: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     }
//   handleChange(e) {
//     this.setState({value: e.target.value});
//   }
//   handleSubmit(e) {
//     const currentVal = this.state.tasks;
//     this.setState({tasks: currentVal.concat(this.state.value)});
//     console.log(this.state.value);
//     e.preventDefault();
//     this.clearInput();
//   }
//   clearInput() {
//     this.setState({value: ''});
//     document.querySelector('input[type="text"]').value = '';
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Enter Task:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit"></input>
//         </form>
//         <div>
//           <List tasks={this.state.tasks} />
//         </div>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       tasks: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     this.setState({value: e.target.value});
//   }
//   handleSubmit(e) {
//     const current = this.state.tasks;
//     this.setState({tasks: current.concat(this.state.value)});
//     e.preventDefault();
//     this.clearInput();
//   }
//   clearInput() {
//     this.setState({value: ''});
//     document.querySelector('input[type="text"]').value = '';
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Enter Task:
//           <input type="text" onChange={this.handleChange}></input></label>
//           <button type='submit'>Submit</button>
//         </form>
//         <div>
//           <List tasks={this.state.tasks}></List>
//         </div>
//       </div>
//     )
//   }
// }
class Enter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <label htmlFor='taskInput'>Enter Task:</label>
        <input type="text" id='taskInput' onChange={this.props.change} value={this.props.task.text}/>
        <button type='submit'>Add Task</button>
      </form>
    )
  }
}
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '', 
        // edit: false,
      },
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.changeLight = this.changeLight.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        index: this.state.tasks.length + 1,
        edit: false,
      }
    });
  }
  changeLight = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  }
  saveLight = (e) => {
    e.preventDefault();
    const find = this.state.tasks.find(task => task.index === Number(e.target.parentElement.id));
    console.log(find);
    const copy = [...this.state.tasks];
    copy[find.index] = this.state.task;
    this.setState({
      tasks: copy,
    })
  }
  handleDelete = (e) => {
    const current = this.state.tasks;
    const update = current.filter(task => task.index !== Number(e.target.parentElement.id));
    this.setState({
      tasks: update,
    })
  }
  handleEdit = (e) => {
    console.log(e.target);
    const find = this.state.tasks.find(task => task.index === Number(e.target.parentElement.id));
    console.log(find);
    const copy = [...this.state.tasks];
    copy[find.index-1].edit = true;
    this.setState({
      tasks: copy,
    })
    console.log(this.state.tasks);
    // not sure how to edit current <li> displayed -> change inner content
    // then change back upon submit...
    // e.target.parentElement.removeContent = <Enter change={this.handleChange} submit={this.handleSubmit} task={this.state.task} />
  }
  render() {
    const {task, tasks} = this.state;

    return (
      <div>
        <Enter change={this.handleChange} submit={this.handleSubmit} task={task} />
        <div>
        <Overview tasks={tasks} action={this.handleDelete} edit={this.handleEdit} clight={this.changeLight}/>
        </div>
      </div>
    )
  }
}

{/* <form onSubmit={this.handleSubmit}>
          <label htmlFor='taskInput'>Enter Task:</label>
          <input type="text" id='taskInput' onChange={this.handleChange} value={task.text}/>
          <button type='submit'>Add Task</button>
        </form> */}

export default App;
