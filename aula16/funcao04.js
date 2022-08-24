function fatorial (n) {
    let fat = 1
    for (let valor = n; valor > 1; valor--) {
        fat *= valor
    }
    return fat
}

console.log(fatorial(5))