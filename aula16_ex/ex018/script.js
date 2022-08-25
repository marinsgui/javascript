let num = document.querySelector('#txtnum')
let lista = document.querySelector('#selres')
let res = document.querySelector('#res')
let valores = []

function adicionar() {
    Number(num.value)
    let n = num.value
    if (Number(num.value) <= 0 || Number(num.value) > 100) {
        return alert('Número inválido!')
    } else {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${n} adicionado`
        lista.appendChild(item)
    }
}

function finalizar() {
    let maiorValor = Math.max.apply(null, valores)
    let menorValor = Math.min.apply(null, valores)
    let total = valores.reduce(function (total, numero) {
        return total + numero
    }, 0);
    let media = total / valores.length
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>
    <p>O maior valor informado foi ${maiorValor}</p>
    <p>O menor valor informado foi ${menorValor}</p>
    <p>Somando todos os valores temos ${total}</p>
    <p>A média dos valores é ${media}`
}
