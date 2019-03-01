import React from "react";
import LinkedList from "data_structures/LinkedList.js";
import names from "data/names.js";
import "./LinkedList.scss";

const Node = ({ node }) => {
  let { prev, item, next } = node;
  let className;
  if (!prev && !next) {
    // detached node
    className = "node--detached";
  } else if (!prev) {
    // head node
    className = "node--head";
  } else if (!next) {
    // tail node
    className = "node--tail";
  }
  return (
    <div key={item} className={`node ${className && className}`}>
      {item}
    </div>
  );
};

const Nodes = ({ data }) => {
  if (!data.getHead()) {
    return null;
  }
  let returnedNodes = [];
  let currNode = data.getHead();
  while (currNode.item) {
    returnedNodes.push(<Node node={currNode} />);
    if (!currNode.next) {
      break;
    }
    currNode = currNode.next;
  }
  return returnedNodes;
};

class LinkedListVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new LinkedList()
    };
  }
  addNames = names => {
    let { list } = this.state;
    names.forEach(obj => {
      list.push(obj.name);
    });
    this.setState({ list });
  };
  sortNames = list => {
    list.sort();
    this.forceUpdate();
  };
  resetList = () => {
    this.setState({ list: new LinkedList() });
  };
  render() {
    let { list } = this.state;
    return (
      <div className="visualizer visualizer--linked-list">
        <section className="visualizer--controls">
          <button
            onClick={() => this.addNames(names)}
            className="visualizer-btn"
          >
            Add Names
          </button>
          <button
            onClick={() => this.sortNames(list)}
            className="visualizer-btn"
          >
            Sort Names
          </button>
          <button onClick={() => this.resetList()} className="visualizer-btn">
            Reset List
          </button>
        </section>
        <Nodes data={list} />
      </div>
    );
  }
}

export default LinkedListVisualizer;
