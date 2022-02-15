let arr = [10, 4, 7, 9, 2, -5, 0, 19];

function min(arr,startIndex) {  
    let bufferMin = 0;
    for (let i = startIndex; i < arr.length; i++){
        if (arr[i] < arr[bufferMin]){
            bufferMin = i;
        }
    }

   return bufferMin;
}
min(arr);
console.log(min(arr));