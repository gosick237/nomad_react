import React from "react";

//to handle state, need class component or hook

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } //redirect
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
