import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onUpdate } = this.props;
    onUpdate(this.state.task);
  }

  render() {
    const { task, edit, onEdit, onDelete } = this.props;
    return (
      <div>
        {!edit ? (
          <div>
            <li>{task}</li>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>X</button>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    );
  }
}

export default Box;
