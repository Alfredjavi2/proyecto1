import React from "react";
import { Redirect } from "react-router-dom";

import { paths } from "@navigation/_exports";

export default class ErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log("❌", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to={paths.error} />;
    }
    return this.props.children;
  }
}
