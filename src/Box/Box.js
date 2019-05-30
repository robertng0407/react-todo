import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onUpdate } = this.props;
    onUpdate(this.state.text);
  }

  render() {
    const { text, edit, onEdit, onDelete } = this.props;
    return (
      <div>
        {!edit ? (
          <div>
            {text}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              name="text"
              value={this.state.text}
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
