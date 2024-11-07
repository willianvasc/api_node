

$(document).ready(function () {
    $("#contact").submit(function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const email = $("#floatingInput").val();
        const content = $("#editor").text(); // Supondo que o conteúdo do editor está como texto

        $.ajax({
            url: 'http://localhost:3000/subscribe',
            type: 'POST',
            contentType: 'application/json', // Define o tipo de conteúdo como JSON
            data: JSON.stringify({ email, content }), // Envia os dados como JSON
            beforeSend: function () {
                $("#submit").attr("disabled", true); // Desabilita o botão de envio
                $("#feedback").text("Enviando..."); // Altera o texto do botão
            },
            success: function (data) {
               $("#feedback").text(data); // Altera o texto do botão
               setTimeout(() => {
                   $("#feedback").text(""); // Altera o texto do botão
                   $("#submit").attr("disabled", false); // Habilita o botão de envio
               }, 3000);
            },
            error: function (err) {
                $("#feedback").text("Erro ao enviar"); // Altera o texto do botão
            }
        });
    });
});
