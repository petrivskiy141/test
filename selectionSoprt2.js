let arr = [10, 4, 7, 9, 2, -5, 0, 19];


function min(arr) {  
    let bufferMin = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[bufferMin]){
            bufferMin = i;
        }
    }

   return bufferMin;
}


function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr) {
    
    for(let i = 0;i <arr.length;i++) {
        min(arr);
        

    }
 
}
    