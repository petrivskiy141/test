// посортурувати від меньшого до більшого
let arr = [2, 7, 3, 5, 1, 4, 6];

function swap(arr,i,j){
    let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

swap(arr);


function sort(arr) {
    
     for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length;j++){ 
        if (arr[j] > arr[j+1]){
            swap(arr,j,j+1);
        

        }
    }  
    }
}

function min(arr) {
    let bufferMin = Infinity;
    for (let i = 0; i <arr.length;i++){
        if (arr[i]<bufferMin){
            bufferMin = arr[i];
        }
    }
    return bufferMin;
}

console.log(arr);


