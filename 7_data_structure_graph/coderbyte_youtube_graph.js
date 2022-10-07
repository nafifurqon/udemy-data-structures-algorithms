// https://www.youtube.com/watch?v=e4RezPkq3UI&list=PLxQ8cCJ6LyOZliGURipQhb9NRza33Jgjs

/**
 * edges list + vertices list
 */
const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// findAdjacentNodes
const findAdjacentNodes = function (node) {
  // Loop through edges array
  // Is my node in the connection?
  // If yes, push the other node in pair, into adjacentNodes array
  // If no, keep looping
  const adjacentNodes = [];

  for (let edge of edges) {
    // edge = ['A', 'B']
    const nodeIndex = edge.indexOf(node);
    if (nodeIndex > -1) {
      const adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};

// isConnected
const isConnected = function (node1, node2) {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

// console.log(findAdjacentNodes("D"));
// console.log(isConnected("C", "B"));
// console.log(isConnected("A", "E"));

/**
 * adjacency matrix
 */
const vertices2 = ["A", "B", "C", "D", "E"];

const vertexIdxs = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// findAdjacencies
const findAdjacencies = function (node) {
  const adjacentNodes = [];

  // get the row in adjacentMatrix
  for (let i = 0; i < vertices2.length; i++) {
    const nodeVertex = vertexIdxs[node];
    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices2[i]);
    }
  }

  // loop through the row
  // if there is 1, push that node
  // otherwise skip

  return adjacentNodes;
};

// isConnected
const isConnected2 = function (node1, node2) {
  const nodeIdx1 = vertexIdxs[node1];
  const nodeIdx2 = vertexIdxs[node2];

  return !!adjacencyMatrix[nodeIdx1][nodeIdx2];
};

// console.log(findAdjacencies("C"))
// console.log(isConnected2("A", "E"))
// console.log(isConnected2("C", "B"))
// console.log(isConnected2("E", "B"))

/**
 * adjacency list
 */
class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }

  connect(node) {
    this.edgeList.push(node);
    node.edgeList.push(this);
  }

  getAdjacentNodes() {
    return this.edgeList.map((edge) => edge.value);
  }

  isConnected(node) {
    return this.edgeList.map((edge) => edge.value).indexOf(node.value) > -1;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

// console.log("nodeA", nodeA);
// console.log("graph", graph);

// for (let node of graph.nodes) {
//   console.log(`Node ${node.value}`);
//   for (let connectedNode of node.edgeList) {
//     console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
//   }
// }

// console.log(nodeA.getAdjacentNodes());
// console.log(nodeC.getAdjacentNodes());

// console.log(nodeA.isConnected(nodeB))
// console.log(nodeA.isConnected(nodeC))
// console.log(nodeD.isConnected(nodeC))
// console.log(nodeD.isConnected(nodeA))
