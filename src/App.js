import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import AddToDo from "./AddToDo/AddToDo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div>
        <AddToDo addToDoFn={this.addToDo} />
        <ToDoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  addToDo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
}

export default App;

// da ne priema prazni poleta
// da imam checkbox kojto da zacherkva taska
// buton kojto da mi pokazva vsichki gotovi taskowe
// app.js da ima samo komponenti bez logika
