class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hashTable = {}
        this.count = 0 //缓存数目
        this.dummyHead = new ListNode() //虚拟头节点
        this.dummyTail = new ListNode() //虚拟尾结点
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }
    get(key) {
        let node = this.hashTable[key]
        if (node == null) return -1
        this.moveToHead(node) //节点存在，且被读取，该节点移动到链表头部
        return node.value //返回该节点值
    }
    put(key, value) {
        let node = this.hashTable[key] //从链表中获取node
        if (node == null) {
            let newNode = new ListNode(key, value) //为键值对创建新的节点
            this.hashTable[key] = newNode //存入哈希表
            this.addToHead(newNode) //将节点添加到链表头部
            this.count++ //缓存数目+1
                if (this.count > this.capacity) {
                    this.removeLRUItem() //超出缓存，删除最远一次使用的数据
                }
        } else {
            //如果存在于链表中
            node.value = value //更新value
            this.moveToHead(node) //将节点移到链表头部
        }
    }
    moveToHead(node) { //刷新节点的位置
        this.removeFromList(node) //从链表中删除节点
        this.addToHead(node) //添加到链表的头部
    }
    removeFromList(node) {
        let tempForPrev = node.prev //暂存它的前驱节点
        let tempForNext = node.next //暂存它的后继节点
        tempForPrev.next = tempForNext //前驱节点的next指向后继节点
        tempForNext.prev = tempForPrev //后继节点的prev指向前驱节点
    }
    addToHead(node) {
        node.prev = this.dummyHead //node的prev指针指向虚拟头节点
        node.next = this.dummyHead.next //node的next指针指向真实头节点
        this.dummyHead.next.prev = node //原真实头节点的prev指向node
        this.dummyHead.next = node //虚拟头节点的next指向node
    }
    removeLRUItem() {
        //删除老家伙
        let tail = this.popTail() //将它从链表尾部删除
        delete this.hashTable[tail.key] //且在哈希表中将他的Key删掉
        this.count-- //缓存数目-1
    }
    popTail() {
        //删除链表尾节点
        let tailItem = this.dummyTail.prev //通过虚拟尾结点找到它
        this.removeFromList(tailItem) //删除该真实尾结点
        return tailItem //返回被删除的节点
    }
}