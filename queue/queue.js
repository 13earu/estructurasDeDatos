class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek() {
        return this.first
    }
    enqueue (value) {
        const newNode = new Node(value);
        if (this.lenth === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.lasth = newNode;
        }
        this.length++;;
    }
}
const myQueue = new Queue ()

