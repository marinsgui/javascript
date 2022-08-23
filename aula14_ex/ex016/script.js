function contar () {
    let n1 = document.querySelector('#num1')
    let n2 = document.querySelector('#num2')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#contagem')
    
    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        alert('Insira os dados corretamente!')
    }

    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(passo.value)

    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉 `
        }
    } else if (i > f) {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} 👉 `
        }
    }
    res.innerHTML += '🛑'
}