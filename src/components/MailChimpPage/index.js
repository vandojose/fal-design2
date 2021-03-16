/* eslint-disable react/no-unused-state */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";

import { FormSubscribe, BellIcon } from "./styles";

export default class MailChimpPage extends React.Component {
  constructor() {
    super();
    this.state = { email: "", name: "", msg: "", result: "" };
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeMsg = (props) => {
    this.setState({ msg: props.data.msg });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    })
      .then((data) => {
        this.setState({ result: data.result });
        if (data.result === "success") {
          this.setState({ email: "" });
          this.setState({ name: "" });
        }
      })
      .catch(() => {});
  };

  render() {
    return (
      <FormSubscribe>
        <h4>Inscreva-se para receber novidades!</h4>
        <form onSubmit={this._handleSubmit}>
          <input
            id="name"
            name="FNAME"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            required
            placeholder="Nome"
          />
          <input
            id="email"
            name="email"
            type="email"
            onChange={this.handleChangeEmail}
            value={this.state.email}
            required
            placeholder="E-mail"
          />

          <button type="submit">
            <span>
              Inscreva-se <BellIcon />
            </span>
          </button>
        </form>
        <div className="msg">
          <span>
            {this.state.result === "error" && `E-mail já cadastrado`}
            {this.state.result === "success" && `Obrigado por se inscrever!`}
          </span>
        </div>
      </FormSubscribe>
    );
  }
}
