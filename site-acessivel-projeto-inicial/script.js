document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = localStorage.getItem('tamanhoFonte') ? parseFloat(localStorage.getItem('tamanhoFonte')) : 1;
    const tamanhoMin = 0.8;
    const tamanhoMax = 2;
    const botaoAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade=document.getElementById('opcoes-acessibilidade');
    botaoAcessibilidade.addEventListener('click', function () {
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');

    })
    
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
    const alternaContraste = document.getElementById('alterna-contraste')
    alternaContraste.addEventListener('click', function ()
        {
        document.body.classList.toggle('alto-contraste')
        })

    // Lógica para alternar a visibilidade das opções de acessibilidade
    /*const botaoAcessibilidade = document.getElementById('botao-acessibilidade');*/
    /*const menuAcessibilidade = document.getElementById('acessibilidade');*/
    /*const opcoesDeAcessibilidade=document.getElementById('opcoes-acessibilidade’);*/

    /*botaoAcessibilidade.addEventListener('click', function () {*/
        // Alterna a classe "show-options" para mostrar ou esconder as opções
        /*menuAcessibilidade.classList.toggle('show-options');*/

    
});