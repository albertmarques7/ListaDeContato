const form = document.getElementById('form');
const nomes = [];
const telefones = [];

let linhas ='';

form.addEventListener ('submit', function(e){
    e.preventDefault();
    adicionalinha();
    atualizaTabela();
});

function adicionalinha () {
    const inputNome = document.getElementById('nome');
    const inputContato = document.getElementById('telefone');

    if (telefones.includes(parseFloat(inputContato.value))){
    alert(`O Contato ${inputContato.value} já foi inserido`);
    } else {
    nomes.push (inputNome.value);
    telefones.push (parseFloat(inputContato.value));

    let linha ='<tr>';     /*recebe a linha como string.*/
    linha += `<td>${inputNome.value}</td>`;
    linha+= `<td>${inputContato.value}</td>`;
    linhas += `</tr>`;

    linhas += linha;
    }

    inputNome.value = '';
    inputContato.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; /*insere no html*/
}