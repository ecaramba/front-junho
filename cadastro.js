
$(document).ready(function(){

    $('#telefone').mask('(00) 0000-0000');

    $('#btn-salvar').click(function(){
        
        var nome = $('#nome').val();
        var telefone = $('#telefone').val();
        var email = $('#email').val();
        var cidade = $('#cidade').val();

        $('input, select').removeClass('is-invalid');

        if (nome.trim() == '')
        {
            $('#nome').addClass('is-invalid');
        }

        if (telefone.trim() == '')
        {
            $('#telefone').addClass('is-invalid');
        }

        if (email.trim() == '')
        {
            $('#email').addClass('is-invalid');
        }

        if (cidade == '')
        {
            $('#cidade').addClass('is-invalid');
        }



    }); // fim do click

});