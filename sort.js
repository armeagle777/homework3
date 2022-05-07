// Sorting without comparison of elements
// All the elements in the array are integers

const testArray = [5,2,4,8,1,7,3,6]


const sort = (input) => {
    const obj = {}
    for (let el of input){
        obj[el] = obj[el] ? obj[el] + 1 : 1
    }
    const result = Object.keys(obj).map(el => +el)

    return result
};


console.log(sort(testArray))