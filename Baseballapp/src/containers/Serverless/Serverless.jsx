import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      passwordInput: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {

  }

  handleSubmit(e) {

  }

  render() {
    return (
      <div className="loginContainer">

      </div>
    )
  }
};


export default Login;