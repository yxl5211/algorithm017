class MyCircularDeque {
    constructor(k) {
        this.capacity = K + 1;
        this.arr = new Array(this.capacity);
        //头部指向第1个存放元素位置//插入时，先减，在赋值//删除时，索引+1（注意取模）循环队列
        this.front = 0;
        //尾部指向下一个插入元素的位置//插入时，先赋值，再加//删除时，索引-1（注意取模）
    }
    insertFront(value) {
        if (this.isFull()) { return false; }
        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.arr[this.front] = value;
        return true;
    }
    insertLast(value) {
        if (this.isFull()) { return false; }
        this.arr[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }
    deleteFront() {
        if (this.isEmpty()) { return false; }
        this.front = (this.front + 1) % this.capacity;
        return true;
    }
    deleteLast() {
        if (this.isEmpty()) { return false; }
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        return true;
    }
    getFront() {
        if (this.isEmpty()) { return -1; }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) { return -1; }
        //当rear为0时，防止数组越界，rear指向的是下一个插入元素的位置，元素为空，需要-1；
        return this.arr[(this.rear - 1 + this.capacity) % this.capacity];
    }
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }
}