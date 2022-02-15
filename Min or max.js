let arr = [10, 4, 7, 9, 2, -5, 0, 19];


function max(arr) {    
    let bufferMax = arr[0];
    for (let i = 0; i <arr.length;i++){
        if (arr[i]>bufferMax){
            bufferMax = arr[i];
        }
    }
   return bufferMax;
}

function min(arr) {
    let bufferMin = arr[0];
    
    for (let i = 0; i < arr.length; i++){
        
        
        if (arr[i] < bufferMin){
            bufferMin = arr[i];
        }
       
    }
   return bufferMin;
}


console.log(max(arr)) ;

console.log(min(arr)) ;