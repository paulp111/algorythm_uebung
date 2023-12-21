class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    prev: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null;
    length: number = 0;

    constructor() { }
    //Append
    append(value: T) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    //Pop
    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }
        const toRemove = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return toRemove.value;
    }
    //shift
    shift(): ListNode<T> | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const prevHead = this.head;
        if (!prevHead) {
            return undefined;
        }

        this.head = prevHead.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        prevHead.next = null;
        this.length--;
        return prevHead;
    }
}



const myList = new DoublyLinkedList<number>();

// Test
myList.append(5);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
myList.append(75);

function printList<T>(list: DoublyLinkedList<T>) {
    let current = list.head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printList(myList);

console.log('Pop:', myList.pop());

const shiftedNode = myList.shift();
console.log('Shift:', shiftedNode ? shiftedNode.value : undefined);

printList(myList);
