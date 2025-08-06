let amigos = [];
const inputNome = document.getElementById('nome-amigo');
const listaAmigos = document.getElementById('lista-amigos');
const resultadoElement = document.getElementById('resultado');

function adicionarAmigo() {
    const nome = inputNome.value.trim();

    // Valida a entrada
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    } else if (amigos.includes(nome)) {
        alert('Opa! Parece que este nome já foi adicionado. Tente um diferente!')
        inputNome.value = '';
        inputNome.focus();
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nome);
    
    // Atualiza a visualização na página
    atualizarLista();

    // Limpa o campo de entrada
    inputNome.value = '';
    inputNome.focus();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há nomes suficientes para o sorteio
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    resultadoElement.textContent = `${amigoSorteado} 🎉`;
}