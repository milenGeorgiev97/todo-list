import React, { Component } from "react";
import "./style.css";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          className={"todoItem" + (todo.completed ? " completed" : " ")}
          onChange={this.toggleTodo}
        />
        {todo.text}
      </div>
    );
  }

  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  };
}

export default TodoItem;
