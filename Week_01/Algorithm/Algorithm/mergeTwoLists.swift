//
//  mergeTwoLists.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

 示例：

 输入：1->2->4, 1->3->4
 输出：1->1->2->3->4->4

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() {
        val = 0
        next = nil
    }
    
    public init(_ val: Int) {
        self.val = val; next = nil
    }
    
    public init(_ val: Int, _ next: ListNode?) {
        self.val = val
        self.next = next
    }
}

func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
    // 递归的解法
    return mergeTwoListsByRecursive(l1, l2)
    
    // 迭代的解法
//    return mergeTwoListsByIteration(l1, l2)
}

func mergeTwoListsByRecursive(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
    /**
     两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。
     */
    guard let list1 = l1 else {
        return l2
    }
    
    guard let list2 = l2 else {
        return l1
    }
    
    if list1.val < list2.val {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}

func mergeTwoListsByIteration(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
    
    
    /**
     判断 l1 和 l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，
     当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。
     */
    
    var list1 = l1
    var list2 = l2
    
    let prehead = ListNode(-1)
    var prev = prehead
    
    while list1 != nil && list2 != nil {
        if list1!.val <= list2!.val {
            prev.next = list1
            list1 = list1!.next
        } else {
            prev.next = list2
            list2 = list2!.next
        }
        prev = prev.next!
    }
    
    prev.next = list1 == nil ? list2 : list1
    
    return prehead.next
}


