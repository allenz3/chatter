import React from "react";
// header class component
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "CHATTER",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {}
  changeTitle = () => {
    this.setState({ text: "New title" });
  };
  // render header
  render() {
    return (
      <header className="header" onClick={this.changeTitle}>
        <div className="logo" />
        <span className="title">{this.state.text}</span>
      </header>
    );
  }
}