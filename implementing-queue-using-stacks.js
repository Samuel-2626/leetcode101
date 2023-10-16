

class MyQueue {

    constructor() {
        this.queue = []
        this.head = 0
        this.tail = 0
        this.length = 100
    }



    push(element) {

        if (this.tail < this.length) {
            this.queue[this.tail] = element
            this.tail++
        } 

    }

    pop() {

        const element = this.queue[this.head]
        this.head++
        return element

    }

    peek() {

        return this.queue[this.head]      

    }

    empty() {

        if (this.queue.length === 0) {
            return true
        }
            return false
        }
}

let test = new MyQueue()
test.push(1)
test.push(2)
console.log(test.peek());
console.log(test.pop());
console.log(test.empty());
