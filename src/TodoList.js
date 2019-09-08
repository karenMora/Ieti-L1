import React from 'react';
import {Todo} from './Todo'
//Este componente debe representar una lista de componentes de Todo. Puede acceder a la lista de tareas utilizando los accesorios: this.props.todoList.

export class TodoList extends React.Component {

  //constructor(props) {
  //  super(props);
  //}

    render() {
      const items= this.props.items;
      const listItems = items.map((item) =>
      <Todo texto={item.text} priority={item.priority} dueDate={item.dueDate}/>);
        return (
          //Add your code here to represent a TODO
          <ul>{listItems}</ul>
        );
    }
}
