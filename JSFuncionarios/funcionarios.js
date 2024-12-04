const informacao = document.querySelector('.informacao');

document.querySelector('.botaoMais').addEventListener('click', () => {
    const funcionario = document.createElement('div');
    funcionario.classList.add('funcionarioInformacao');
    funcionario.innerHTML = `
        <div class="descricaoFunc">
            <input type="text" placeholder="Nome do funcionário">
        </div>
        <div class="descricaoFunc"> 
            <input type="text" placeholder="Descrição do funcionário">
        </div>
        <button class="lixeira" aria-label="Remover funcionário">
            <img src="assets/trash.svg" alt="Remover">
        </button>
    `;
    funcionario.querySelector('.lixeira').addEventListener('click', () => funcionario.remove());
    informacao.appendChild(funcionario);
});