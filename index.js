const form = document.querySelector('#form_message');
const rolagem = document.querySelector('#rolagem');

rolagem.scrollTop = rolagem.scrollHeight;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#message').value;
    const mensagem = document.createElement('div');
    mensagem.innerHTML = `
    <div class="lado-dir mt-5">
        <div class="caixa">
            <p class="tit-diag">Você:</p>
            <div class="box-dialogo-le">
            <p class="">${message}</p>
            </div>
        </div>
    </div>
    `;
    rolagem.appendChild(mensagem);
    form.reset();
    rolagem.scrollTop = rolagem.scrollHeight;


}
);

