function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano - fAno.value
        let genero = ''
        let img = document.createElement('img')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-homem.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-mulher.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
