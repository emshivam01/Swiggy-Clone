import React from "react";
import Child from "./ClassComponent/Child";

class ClassyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("ClassyComponent Constructor");
  }

  componentDidMount() {
    console.log("ClassyComponent ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("ClassyComponent ComponentDidupdate");
  }

  render() {
    console.log("ClassyComponent Render");
    return (
      <div className="border-2 h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-7xl drop-shadow-2xl mb-10">
          {"{ "}This is a Classy page {" }"}
        </h1>
        <Child num={"1"} />
        <Child num={"2"} />

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increase Count
        </button>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("ClassyComponent ComponentWillUnmount");
  }
}

export default ClassyComponent;
