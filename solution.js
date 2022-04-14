const { nums, words } = require("./data/data.js");

class Node {
  constructor(data = null, next = null){
      this.data = data;
      this.next = next; //pointer for node that says which node is next [next stop on bus]
  }
}

//head points to the first node [first stop on bus]

class LinkedList {
  constructor(){
    this.head = null; //[old head, first node in list]
  }
  insert(data){
    let newNode = new Node(data, this.head); //new node created
    this.head = newNode; //new head, redefining what the first stop is
  }

  size(){
    let count = 0
    let current = this.head //starting point to go over every single node in list until the end
    // console.log(current)
    while(current !== null){ //null is at the end, while current is not empty
    count += 1 //goes to next node, counting stop by stop to get length
    // console.log(current.next)
    current = current.next // as long as current isn't null, go onto next node
    }
    return count //return count once you hit null
  }
  
  
getFirst(){//retrieve first element
    return this.head; //this.head => first node in list
  }

  search(input){
    if(this.head === input){//if first node in list equals user input
      return this.head //return node
    } 
  }

clear(){
  return this.head = null; //empty output
}

//Convert data from linked lists into an array
convertData(){
  let arr = []
  let node = this.head
  while(node.next){
    arr.push(node.data)//pushing node data into arr
    node = node.next //next node
  }
  arr.push(node.data)
  return arr;
}

isEmpty(){
  if(this.head === null){ //if empty return true
    return true
  } 
  return false
}

containsDuplicates(){
  const array = [] //created new array
  const length = this.size() //length of linked list
  let currentNode = this.head
  for(let i = 0; i < length; i++){
    if(array.includes(currentNode.data)){
      return true //returning true if current node data is inside of arr
    }else {//if data is not included, add data to arr and go onto the next node 
      array.push(currentNode.data)
      currentNode = currentNode.next
    }
  }
  return false
}

getLast(){
  let currentNode = this.head.next //next node
  while(currentNode.next !== null){//if the next node isnt empty, go onto next node
    currentNode = currentNode.next
  }
  return currentNode
}








}
// const consoleLog = new LinkedList()
// consoleLog.insert(1)
// consoleLog.insert(5)
// consoleLog.insert(13)
// consoleLog.insert(2)

// consoleLog.size()








module.exports = {
  Node,
  LinkedList,
};
