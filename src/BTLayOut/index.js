import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default class BTTHLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
