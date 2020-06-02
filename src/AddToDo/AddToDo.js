import React, { Component } from "react";

class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() {
    return (
      <div className="addTodoContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input
            id="addToDoInput"
            onChange={(e) => this.updateInput(e)}
            type="text"
          ></input>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addToDoFn(this.state.todo);
    document.getElementById("addToDoInput").value = "";
  };
}

export default AddToDo;
