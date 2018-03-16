// 二分查找

// 非递归方式

// function binary_search(arr, value) {
//     let low = 0,
//         high = arr.length-1;
    
//     while(low < high) {
//         let mid = ~~((low+high)/2),
//             now_val = arr[mid];
        
//         if(now_val === value) {
//             console.log(mid);
//             return;
//         } else if(now_val < value) {
//             low = mid;
//         } else {
//             high = mid;
//         }
//     }
// }

// 递归方式

function binary_search(arr, value, low, high) {

    if(!low && !high) {
        low = 0;
        high = arr.length;
    }

    let mid = ~~((low+high)/2),
        now_val = arr[mid];
    
    if(now_val == value) {
        console.log(mid);
        return;
    } else if(now_val < value) {
        binary_search(arr, value, mid, high);
    } else {
        binary_search(arr, value, low, mid);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 9],
    value = 9;

binary_search(arr, value);