import React, { Component } from "react";

import Todo from "../Todo/Todo";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  save(todo) {
    this.setState(st => ({
      todos: st.todos.concat(todo)
    }));
  }

  edit(id) {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(t => t.id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].edit = true;
    this.setState({
      todos: updatedTodos
    });
  }

  update(id, task) {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(t => t.id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], edit: false, task };
    this.setState({
      todos: updatedTodos
    });
  }

  delete(id) {
    this.setState(st => ({
      todos: st.todos.filter(t => t.id !== id)
    }));
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        task={todo.task}
        edit={todo.edit}
        onDelete={() => this.delete(todo.id)}
        onEdit={() => this.edit(todo.id)}
        onUpdate={task => this.update(todo.id, task)}
      />
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        <ul>{todos}</ul>
        <NewTodoForm saveTodo={this.save} />
      </div>
    );
  }
}

export default BoxList;
