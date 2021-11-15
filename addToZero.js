// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function addToZero(arr) {
    var zeroable = false;
    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var innerNum = arr[j];
            if (i === j) {
                continue;
            } else if (currentNum + innerNum === 0) {
                zeroable = true;
            }
        }
    }

    console.log(zeroable);
}

addToZero(array);