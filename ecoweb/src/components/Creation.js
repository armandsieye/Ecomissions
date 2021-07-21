import React, { Component } from 'react';
import '../styles/Creation.css';


class Creation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      content: "",
      isGoing: false,
      numberPart: 0
    };
  }

  handleSubmitForm(event) {
    alert("Full Name: " + this.state.fullName, "content: " + this.state.content);
    event.preventDefault();
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState({
      fullName: value,
      content: value,
      isGoing: value,
      numberPart: value
    });
  }

  render() {
    return (
      <form className="create" onSubmit={event => this.handleSubmitForm(event)}>
        <label>
          Nom mission:
          <br />
          <input
            type="text"
            value={this.state.fullName}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <br />
        <label>
          Nom association:
          <br />
          <input
            type="text"
            value={this.state.fullname}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <br />
        <label>Description mission:</label>
        <br />
        <textarea cols="45" rows="5"
          value={this.state.content}
          onChange={event => this.handleChange(event)}
        />
        <br />

        <label>
          Limiter participant :
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Nombre participants :
          <input
            name="numberPart"
            type="number"
            value={this.state.numberPart}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <input className="button" type="submit" value="Créer mission" />

      </form>

    );
  }
}

//ReactDOM.render(<SimpleForm />, document.getElementById("form1"));

export default Creation;