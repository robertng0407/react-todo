import React, { Component } from "react";

import Box from "../Box/Box";
import NewBoxForm from "../NewBoxForm/NewBoxForm";

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

  update(id, text) {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(t => t.id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], edit: false, text };
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
      <Box
        key={todo.id}
        text={todo.text}
        edit={todo.edit}
        onDelete={() => this.delete(todo.id)}
        onEdit={() => this.edit(todo.id)}
        onUpdate={text => this.update(todo.id, text)}
      />
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        {todos}
        <NewBoxForm saveTodo={this.save} />
      </div>
    );
  }
}

export default BoxList;
