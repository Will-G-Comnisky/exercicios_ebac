$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            }, 
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            adress: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu nº de telefone',
            email: 'Por favor, insira o seu e-mail',
            cpf: 'Por favor, insira o seu CPF',
            cep: 'Por favor, insira o seu CEP',
            adress: 'Por favor, insira o seu endereço',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})