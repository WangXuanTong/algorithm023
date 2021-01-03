//
//  MyCircularDeque.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 设计实现双端队列。
 你的实现需要支持以下操作：

 MyCircularDeque(k)：构造函数,双端队列的大小为k。
 insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 isEmpty()：检查双端队列是否为空。
 isFull()：检查双端队列是否满了。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/design-circular-deque
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class MyCircularDeque {
    
    var capacity:Int
    var arr:[Int] = []
    
    // 当指针rear或front越界时，转化为对应当头尾指针位置，就可以首尾相连，消除假溢出
    /// 队首指针
    var front:Int!
    /// 队尾指针
    var rear:Int!
    
    
    /** 在此初始化您的数据结构。将双端队列的大小设置为k. */
    init(_ k: Int) {
        
        capacity = k + 1
        
        // 初始化某个容量的数组
        arr = Array(repeating: 0, count: capacity)
        
        // 头部指向第 1 个存放元素的位置
        // 插入时，先减，再赋值
        // 删除时，索引 +1（注意取模）
        front = 0
        
        // 尾部指向下一个插入元素的位置
        // 插入时，先赋值，再加
        // 删除时，索引 -1（注意取模）
        rear = 0
    }
    
    /** 将一个元素添加到双端队列(Deque)头部。 如果操作成功返回 true */
    func insertFront(_ value: Int) -> Bool {
        if (isFull()) {
            return false
        }
        front = (front - 1 + capacity) % capacity
        arr[front] = value
        return true
        
        
    }
    
    /** 将一个元素添加到双端队列尾部。如果操作成功返回 true */
    func insertLast(_ value: Int) -> Bool {
        if (isFull()) {
            return false
        }
        arr[rear] = value
        rear = (rear + 1) % capacity
        return true
    }
    
    /** 从双端队列头部删除一个元素。 如果操作成功返回 true. */
    func deleteFront() -> Bool {
        if (isEmpty()) {
            return false
        }
        // front 被设计在数组的开头，所以是 +1
        front = (front + 1) % capacity
        return true
    }
    
    /** 从双端队列尾部删除一个元素。如果操作成功返回 true. */
    func deleteLast() -> Bool {
        if (isEmpty()) {
            return false
        }
        // rear 被设计在数组的末尾，所以是 -1
        rear = (rear - 1 + capacity) % capacity
        return true
    }
    
    /** 从双端队列头部获得一个元素。如果双端队列为空，返回 -1 */
    func getFront() -> Int {
        if (isEmpty()) {
            return -1
        }
        return arr[front]
    }
    
    /** 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 */
    func getRear() -> Int {
        if (isEmpty()) {
            return -1
        }
        // 当 rear 为 0 时防止数组越界
        return arr[(rear - 1 + capacity) % capacity]
    }
    
    /** 检查双端队列是否为空。 */
    func isEmpty() -> Bool {
        return front == rear
    }
    
    /** 检查双端队列是否满了 */
    func isFull() -> Bool {
        // 注意：这个设计是非常经典的做法
        return (rear + 1) % capacity == front
    }
}
