// 递归

function quick_sort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr;
    }
    let mid_value = arr.splice(~~(len/2), 1)[0],
        left = [],
        right = [];

    arr.forEach(item => {
        if(item < mid_value) {
            left.push(item);
        } else {
            right.push(item);
        }
    });

    return quick_sort(left).concat([mid_value], quick_sort(right));
}


let arr = [5,6,2,1,3,8,7,1,2,3,4,7];
console.log(quick_sort(arr));