class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root
    let homeless = true;

    while (homeless) {
      if (newNode.val < currNode.val) {

        // if the left node is null make it the newNode.
        if(currNode.left === null) {

          currNode.left = newNode;
          homeless = false;
        } else currNode = currNode.left; //else continue searching

      } else if (newNode.val > currNode.val) {

        // if the right node is null make it the newNode.
        if(currNode.right === null) {

          currNode.right = newNode;
          homeless = false;
        } else currNode = currNode.right; //continue searching
      }
    }

    return this;
  }

  insertRecHelper(node, newNode) {
    if(newNode.val < node.val) {
      // if the left node is null make it the newNode.
      if(node.left === null) node.left = newNode;
      else this.insertRecHelper(node.left, newNode); //else continue searching
    } else{
      // if the right node is null make it the newNode.
      if(node.right === null) node.right = newNode;
      else this.insertRecHelper(node.right, newNode); //continue searching
    }
  }
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if (this.root === null) this.root = newNode;
    else this.insertRecHelper(this.root, newNode)
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined;

    let queue = [this.root]

    while (queue.length) {
      const current = queue.shift();
  
      if (current.val === val) return current;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return undefined;
  }

  findRecHelper(val, node) {
    if (val === node.val) {
      return node;
    } else if(val < node.val) {
      if(node.left === null && node.right === null) return undefined;
      else return this.findRecHelper(val, node.left); //else continue searching
    } else{
      if(node.left === null && node.right === null) return undefined;
      else return this.findRecHelper(val, node.right); //continue searching
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;
    return this.findRecHelper(val, this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, visited = []) {

    visited.push(current.val);
    if (current.left) this.dfsPreOrder(current.left, visited);
    if (current.right) this.dfsPreOrder(current.right, visited);

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, visited = []) {

    if (current.left) this.dfsInOrder(current.left, visited);
    visited.push(current.val);
    if (current.right) this.dfsInOrder(current.right, visited);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, visited = []) {

    if (current.left) this.dfsPostOrder(current.left, visited);
    if (current.right) this.dfsPostOrder(current.right, visited);
    visited.push(current.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      visited.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

var binarySearchTree = new BinarySearchTree();

module.exports = BinarySearchTree;
