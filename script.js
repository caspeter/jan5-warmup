'use strict';

// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save

function twoSum(arr, targetInt) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var numToFind = targetInt - arr[i];
        for (var j = 0; j < arr.length; j++) {
            if (numToFind === arr[j]) {
                newArr.push(arr[i]);
                newArr.push(arr[j]);
                console.log(newArr);
                return;
            }
        }
    }
    console.log('Nothing adds up to ', targetInt);
}

// twoSum([1, 2, 3, 4, 5, 6, 7], 13);
//
// twoSum([1, 2, 3, 4, 5, 6, 7], 20);
//
// twoSum([1, 3, 5, 7, 9], 8);

module.export = twoSum;
