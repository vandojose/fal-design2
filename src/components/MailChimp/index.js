/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";

import { FormSubscribe, BellIcon } from "./styles";

export default class MailChimp extends React.Component {
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
        <div className="form">
          <form onSubmit={this._handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="FNAME"
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
                required
              />
            </div>

            <button type="submit">
              <span>
                Inscreva-se! <BellIcon />
              </span>
            </button>
          </form>
          <div className="msg">
            <span>
              {this.state.result === "error" && `E-mail já cadastrado`}
              {this.state.result === "success" && `Obrigado por se inscrever!`}
            </span>
          </div>
        </div>
      </FormSubscribe>
    );
  }
}
