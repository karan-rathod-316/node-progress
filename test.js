function firstNonConsecutive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        console.log(newArr[newArr.length - 2])

    }
}

firstNonConsecutive([1, 2, 3])