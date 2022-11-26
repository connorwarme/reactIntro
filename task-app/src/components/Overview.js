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
                <li key={index}>{task}</li>
              )
            }
          )}
        </ul>
      )
    }
  }

  export default List;