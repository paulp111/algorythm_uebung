var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Append
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    };
    //Pop
    DoublyLinkedList.prototype.pop = function () {
        if (!this.tail) {
            return undefined;
        }
        var toRemove = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
        this.length--;
        return toRemove.value;
    };
    //shift
    DoublyLinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var prevHead = this.head;
        if (!prevHead) {
            return undefined;
        }
        this.head = prevHead.next;
        if (this.head) {
            this.head.prev = null;
        }
        else {
            this.tail = null;
        }
        prevHead.next = null;
        this.length--;
        return prevHead;
    };
    return DoublyLinkedList;
}());
var myList = new DoublyLinkedList();
// Test
myList.append(5);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
myList.append(75);
function printList(list) {
    var current = list.head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}
printList(myList);
console.log('Pop:', myList.pop());
var shiftedNode = myList.shift();
console.log('Shift:', shiftedNode ? shiftedNode.value : undefined);
printList(myList);
