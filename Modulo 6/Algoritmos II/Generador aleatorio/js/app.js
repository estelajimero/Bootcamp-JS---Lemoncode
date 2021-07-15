let randomPick = (n, min, max) => {
    const range = max - min + 1;
    let arr = [];

    while (arr.length < n) {
        let randomInt = Math.floor(Math.random() * range) + min;
        if (arr.indexOf(randomInt) === -1) {
            arr.push(randomInt);
        }
    }

    return (arr);
}

console.log(randomPick(10, 1, 100));
console.log(randomPick(6, 1, 49));
console.log(randomPick(15, 1, 15));
console.log(randomPick(1, 1, 6));