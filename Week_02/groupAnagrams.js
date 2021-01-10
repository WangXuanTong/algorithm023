/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let s of strs){
        let res = s.split("").sort().join("")
        if(!map.get(res)){
            map.set(res, [])
        } 
        map.get(res).push(s)
    }
    return Array.from(map.values())
};