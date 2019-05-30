import React, { Component } from "react";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", edit: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { saveTodo } = this.props;
    const newTodo = { ...this.state, id: uuid() };
    saveTodo(newTodo);
    this.setState({
      text: "",
      edit: false
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>New Todo</p>
          <input
            type="text"
            name="text"
            placeholder="New Todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
