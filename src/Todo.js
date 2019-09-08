import React from 'react';

export class Todo extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

    render() {
        return (
          <div>
            <h2>{this.props.text}</h2>
            <p>priority: {this.props.priority} </p>
            <p>dueDate: {this.props.dueDate} </p>
          </div>
        );
    }

}
