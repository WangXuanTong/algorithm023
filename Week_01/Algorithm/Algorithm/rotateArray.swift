//
//  rotatArra.swift
//  Algorithm
//
//  Created by Tong on 2021/1/2.
//

import Foundation

/**
 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

 示例 1:

 输入: [1,2,3,4,5,6,7] 和 k = 3
 输出: [5,6,7,1,2,3,4]
 解释:
 向右旋转 1 步: [7,1,2,3,4,5,6]
 向右旋转 2 步: [6,7,1,2,3,4,5]
 向右旋转 3 步: [5,6,7,1,2,3,4]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/rotate-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
func rotate(_ nums: inout [Int], _ k: Int) {
    if k <= 0 {
        return
    }

    /**
     当我们旋转数组 k 次，k%n 个尾部元素会被移动到头部，剩下的元素会被向后移动。
     */

//    // 时间复杂度O(1)
//    // 空间复杂度O(n)
//    // 需要移动的起始下标
//    let times = k % nums.count
//    // 数组的结尾下标
//    let n = nums.count
//    // 分离出移动的数组，插入到数组头部
//    let temp = nums[n-times..<n] + nums[0..<n-times]
//    nums = Array(temp)

    // 时间复杂度O(n)
    // 空间复杂度O(1)
    for _ in 1 ... k {
        let lastItem = nums.last
        nums.removeLast()
        if lastItem != nil {
            nums.insert(lastItem!, at: 0)
        }
    }
}
