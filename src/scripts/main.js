document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();
        let numeroMaximo = document.getElementById('max-number').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo + 1);

        document.getElementById('valor-resultado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})