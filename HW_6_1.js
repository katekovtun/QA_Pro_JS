///тасувати масив

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    var n = arr.length;
    while (n !== 0) {
        var j = Math.floor(Math.random() * n);
        n--;
        i = arr[n];
        arr[n] = arr[j];
        arr[j] = i;
    }
}

console.log("До перемішування:", arr);
myBlend(arr);
console.log("Після перемішування:", arr);