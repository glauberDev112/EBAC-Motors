$(document).ready(function() {
    $('#carossel-images').slick({
        autoplay: true
    }) // sistema de slider dos bunners (carrossel)
    $('.menu-hamburger').click(function () {
        $('nav').slideToggle() 
        //  sistema de abri/fecha do menu hamburger
    })
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 00000-0000'
    })
    $('#CPF').mask('000000000/00',{
        placeholder:'000000000/00'
    })
    $('#CEP').mask('00000-000',{
        placeholder:'00000-000'
    })
    $('#CEP').mask('00000-000',{
        placeholder:'00000-000'
    })
    $('form').validate({// regras de manipulação
        rules:{
            telefone:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            produto:{
                required: true
            },
            CPF: {
                required: true
            },
            CEP: {
                required: true
            },
            msg: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {// mensagems
            nome: 'É necessario incerir o seu nome',
            telefone: 'Precisamos manter contato com você',
            email: 'É muito importante incerrir o email do comprador',
            produto: 'É importante incerrir ou selecionar um produto',
            msg: 'Precisamos de um comentario seu',
            CPF: 'É necessario colocar o CPF',
            CEP: 'É necessario colocar o CEP',
            endereço: 'precisamos saber onde você esta'
        },
        submitHandler: function fun (form /*tag*/) {// evento submit
            console.log(form)
            alert('compra solicitada com sucesso!!!')
            form.submit()
        },
        invalidHandler: function fun (evento,validador) {// evento submit
            let erros = validador.numberOfInvalids()
            alert(`estão faltando ${erros} informações para solicitar a compra do produto`)
        }
    })
    $('.catalogo button').click(function fun () { // rolagem automatica /e incerção automatica
        
        
        const produto = $(this).parent().find('h3').text()
        $('#veiculo-de-interece').val(produto)//incerção automatica
        
        const destino = $('#cotato-venda')
        $('html').animate({//rolagem automatica
            scrollTop: destino.offset().top
        },1000/*milisegundos*/)
    })
})