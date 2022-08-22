let hora = new Date();
let horaAtual = hora.getHours();
let horario = document.querySelector('#hora');

if (horaAtual >= 6 && horaAtual < 12) {
    horario.innerHTML = 
`
    <p>Agora são ${horaAtual} horas.</p>
    <img src="manha.png">
`
    document.body.style.background = '#e6d09f'

} else if (horaAtual >= 12 && horaAtual <= 18) {
    horario.innerHTML = 
`
    <p>Agora são ${horaAtual} horas.</p>
    <img src="tarde.png">
`
    document.body.style.background = '#f7af96'

} else if (horaAtual > 18) {
    horario.innerHTML = 
`
    <p>Agora são ${horaAtual} horas.</p>
    <img src="noite.png">
`
    document.body.style.background = '#1a3757'
}

    

