function sumOfSums(n) {
    if(n === 1n) return n;
    const series = [0n, 1n];
    let even = 2n;
    let odd = 3n;
    for(let i = 2n; i <= n; i++) {
        const isEven = i % 2n === 0n;
        let square = 0n;
        if(isEven) {
            square = even ** 2n;
            even += 2n;
        } else {
            square = odd ** 2n;
            odd += 2n;
        }
        series.push(series[i - 2n] + square);
    }
    return series[series.length - 1];
}

console.log(sumOfSums(100))
