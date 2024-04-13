function findKthGreatest(arr, k) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[k-1];
}

const array = [3, 1, 4, 15, 9];
const k = 3;
console.log(`The ${k}rd greatest element is ${findKthGreatest(array, k)}.`);
