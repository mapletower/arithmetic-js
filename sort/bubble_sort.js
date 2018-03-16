// 冒泡排序

// 非递归方式
// function bubble_sort(arr) {
//     let len = arr.length;

//     for(let i = 0; i <len-1; i++) {
//         for(let j = 0; j < len-i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = tmp;

//                 /*
//                     // 利用按位异或运算节省空间
//                     arr[j] = arr[j] ^ arr[j+1];
//                     arr[j+1] = arr[j] ^ arr[j+1];
//                     arr[j] = arr[j] ^ arr[j+1];
//                 */
//             }
//         }
//     }

//     console.log(arr);
// }

// 递归方式
function bubble_sort(arr, end) {
    if(!end) {
        end = arr.length;
    } else if (end == 1){
        console.log(arr);
        return;
    } else {
        end--;
    }

    for(let i = 0; i < end; i++) {
        if(arr[i] > arr[i+1]) {
            let tmp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = tmp;

            /*
                // 利用按位异或运算节省空间
                arr[j] = arr[j] ^ arr[j+1];
                arr[j+1] = arr[j] ^ arr[j+1];
                arr[j] = arr[j] ^ arr[j+1];
            */
        }
    }

    bubble_sort(arr, end)
}

bubble_sort([3,2,4,1,0]);