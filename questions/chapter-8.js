// 1. Unique Characters in a String
// Assume string is only lowercase

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

function isAllUnique(str) {
    let countDictionary = {}
    for (let char of str) {
        if (char in countDictionary)
            return false
        countDictionary[char] = 1
    }
    return true
}

console.log(isAllUnique(string_1));

// 2. Merge Sorted Arrays

let arr1 = [1, 2, 4, 7]
let arr2 = [2, 3, 4, 5, 6, 8]

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = []
    let indxArr1 = 0
    let indxArr2 = 0

    while (indxArr1 < arr1.length || indxArr2 < arr2.length) {
        if (indxArr1 >= arr1.length)
        {
            mergedArray.push(arr2[indxArr2])
            indxArr2++
        } else if (indxArr2 >= arr2.length) {
            mergedArray.push(arr1[indxArr1])
            indxArr1++
        } else {
            let currValArr1 = arr1[indxArr1]
            let currValArr2 = arr2[indxArr2]
            if (currValArr1 < currValArr2)
            {
                mergedArray.push(arr1[indxArr1])
                indxArr1++
            } else if (currValArr2 < currValArr1) {
                mergedArray.push(arr2[indxArr2])
                indxArr2++
            } else {
                mergedArray.push(arr1[indxArr1])
                indxArr1++
                indxArr2++
            }
        }
    }

    return mergedArray
}

function mergeSortedArrays2(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort()
    return mergedArray
}

console.log(mergeSortedArrays2(arr1, arr2));

// 3. Find All Duplicates in an Array O(n) time 
let sampleArr1 = [1, 2, 1, 3, 5, 6, 5, 6]
let sampleArr2 = [1, 2, 3, 4]

function findAllDuplicatesInArr(nums) {
    let duplicateArr = []
    let countDictionary = {}
    for (let num of nums) {
        if (!countDictionary[num])
        {
            countDictionary[num] = 1
            continue
        }
        duplicateArr.push(num)
    }
    return duplicateArr
}

console.log(findAllDuplicatesInArr(sampleArr1));

// 4. Rotate Array by k steps

let start_array = [1, 2, 3, 4, 5, 6]

function rotateArray(arr, k = 0) {
    let rotatedArray = []
    let start_index = k % arr.length
    for (let i = 0; i < arr.length; i++)
    {
        rotatedArray.push(arr[start_index])
        start_index = (start_index + 1) % arr.length
    }
    return rotatedArray
}

function rotateArrayJames(arr, k) {
    let end_values = arr.slice(k)
    let start_values = arr.slice(0, k)
    let new_array = [...end_values, ...start_values]
    return new_array
}

console.log(rotateArrayJames(start_array, 3));

// 5. Valid Parentheses
let s = '{}[]()'
let s_2 = '([])'

function validParentheses(s) {
    const combos = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = []

    for (let par of s) {
        // if opening par always push
        if (par in combos)
        {
            stack.push(par)
            continue
        }
        // if closing par and stack empty, it is not valid
        if (stack.length === 0)
            return false

        // if equal to stack head remove from stack, else mismatch
        let stackHead = stack[stack.length - 1]
        if (combos[stackHead] === par) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
}

console.log(validParentheses(s_2));