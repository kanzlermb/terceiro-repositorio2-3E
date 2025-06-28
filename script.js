const numeroSenha = Document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;

}

function aumentaTamanho(){
    tamanhoSenha++;