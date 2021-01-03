//
//  removeDuplicates.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation
/**
 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func removeDuplicates(_ nums: inout [Int]) -> Int {
    if nums.count < 2 {
        return nums.count
    }
    
//    // 时间复杂度O(n)
//    // 空间复杂度O(n)
//    var result = [Int]()
//    var currentNumber = nums[0]
//    result.append(currentNumber)
//
//    for index in 0 ..< nums.count {
//
//        if currentNumber != nums[index] {
//            result.append(nums[index])
//            currentNumber = nums[index]
//        }
//    }
//
//    nums = result
//
//    return nums.count

    // 时间复杂度O(n)
    // 空间复杂度O(1)
    var slow = 0
    var fast = 1
    while fast < nums.count {
        if nums[slow] != nums[fast] {
            if fast - slow > 1 {
                nums[slow + 1] = nums[fast]
            }
            slow += 1
        }
        fast += 1
    }
    
    return slow + 1
}
