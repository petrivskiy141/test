let arr = [1, 2, 3, 4, 5];
let row;
debugger;

for (let i = 0, j = arr.length-1; i < arr.length; i++ , j--) {
    if (i != j) {
    row = arr[i];
    arr[i] = arr[j];
    arr[j] = row;
    }

}

console.log(arr);