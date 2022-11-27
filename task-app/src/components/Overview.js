import React from 'react';

class List extends React.Component {
      // constructor(props) {
      //   super(props);
      // }
    render() {
      return (
        <ul>
          {this.props.tasks.map(
            (task, index) => {
              return (
                <li key={index}><input type="checkbox"></input>{task}</li>
              )
            }
          )}
        </ul>
      )
    }
  }

  const Overview = (props) => {
    const { tasks } = props;

    return (
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task.text}</li>;
        })}
      </ul>
    )
  }

  export default Overview;