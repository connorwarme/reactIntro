import React from 'react';

// List from my solution (2 versions)
// class List extends React.Component {
//       // constructor(props) {
//       //   super(props);
//       // }
//     render() {
//       return (
//         <ul>
//           {this.props.tasks.map(
//             (task, index) => {
//               return (
//                 <li key={index}><input type="checkbox"></input>{task}</li>
//               )
//             }
//           )}
//         </ul>
//       )
//     }
//   }

  const Overview = (props) => {
    const { tasks, action, edit } = props;

    return (
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index} id={task.index}>
            {index+1}: {task.text} <button onClick={action}>Delete</button>
            <button onClick={edit}>Edit</button>
            </li>
        )})}
      </ul>
    )
  }

  export default Overview;