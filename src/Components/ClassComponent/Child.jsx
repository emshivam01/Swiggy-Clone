import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);

    console.log("child " + this.props.num + " Constructor");
  }

  componentDidMount() {
    console.log("child " + this.props.num + " ComponentDidMount");
  }

  render() {
    console.log("Child " + this.props.num + " render");
    const num = this.props.num;
    return <h1 className="text-2xl mb-5 shadow-2xl">This is child {num}</h1>;
  }
}

export default Child;
