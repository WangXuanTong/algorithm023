//
//  main.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/// 删除排序数组中的重复项
func removeDuplicates() {
    var list = [1, 1, 2]
    let count = removeDuplicates(&list)
    print(count)
    print(list)
}

/// 旋转数组
func rotateArray() {
    var list =  [1,2,3,4,5,6,7]
    let k = 3
    
    rotate(&list, k)
    print(list)
}


/// 两数之和
func twoNumberSum() {
    
    let nums = [-1,-2,-3,-4,-5]//[2,7,11,15]
    let target = -8//9
    
    let res = twoSum(nums, target)
    print(res)
}

/// 移动零
func moveZeroes() {
    
    var nums = [0,1,0,3,12]
    moveZeroes(&nums)
    print(nums)
}

/// 加1
func plusOne() {
    
    let list = [9, 9, 8]
    let res = plusOne(list)
    print(res)
}

func circularDeque() {
    let obj = MyCircularDeque(8)
    
    print(obj.arr)
    _ = obj.insertFront(10)
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.insertFront(20)
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.insertFront(30)
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.insertFront(40)
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.insertFront(50)
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.deleteFront()
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])
    
    _ = obj.deleteFront()
    print(obj.arr)
    print(obj.arr[obj.front])
    print(obj.arr[obj.rear])

//    let ret_1: Bool = obj.insertFront(1)
//    let ret_2: Bool = obj.insertLast(1)
//    let ret_3: Bool = obj.deleteFront()
//    let ret_4: Bool = obj.deleteLast()
//    let ret_5: Int = obj.getFront()
//    let ret_6: Int = obj.getRear()
//    let ret_7: Bool = obj.isEmpty()
//    let ret_8: Bool = obj.isFull()


}

/// 接雨水
func trap() {
    let height = [1,0,0,2,1,0,1,3,2,1,2,1]
    let water = trap(height)
    print(water)
    
}

trap()
