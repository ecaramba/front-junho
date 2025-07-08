
$(document).ready(function(){

    $('#telefone').mask('(00) 0000-0000');

    $('#btn-salvar').click(function(){
        
        var nome = $('#nome').val();
        var telefone = $('#telefone').val();
        var email = $('#email').val();
        var cidade = $('#cidade').val();
        var erro = false;

        $('input, select').removeClass('is-invalid');

        if (nome.trim() == '')
        {
            $('#nome').addClass('is-invalid');
            erro = true;
        }

        if (telefone.trim() == '')
        {
            $('#telefone').addClass('is-invalid');
            erro = true;
        }

        if (email.trim() == '')
        {
            $('#email').addClass('is-invalid');
            erro = true;
        }

        if (cidade == '')
        {
            $('#cidade').addClass('is-invalid');
            erro = true;
        }

        if (erro == true)
        {
            alert("Existem erros no formulario")
        } else {
            $.post("https://www.google.com")
        }



    }); // fim do click

});