/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let stindex = 0;
    
    return s.split('').reduce((max, v, i) => {
        stindex = map[v]  >= stindex  ? map[v]+1 : stindex;
        map[v] = i;
        return Math.max(max, i+1- stindex)
    }, 0)
};
