document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = localStorage.getItem('tamanhoFonte') ? parseFloat(localStorage.getItem('tamanhoFonte')) : 1;
    const tamanhoMin = 0.8;
    const tamanhoMax = 2;

    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    aumentarFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < tamanhoMax) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
        }
    });

    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    diminuirFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > tamanhoMin) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
        }
    });

    // Lógica para alternar a visibilidade das opções de acessibilidade
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const menuAcessibilidade = document.getElementById('acessibilidade');

    botaoAcessibilidade.addEventListener('click', function () {
        // Alterna a classe "show-options" para mostrar ou esconder as opções
        menuAcessibilidade.classList.toggle('show-options');
    });
});