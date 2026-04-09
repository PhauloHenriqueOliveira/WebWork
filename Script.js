//Troca de cor
const btnTema = document.getElementById('theme-toggle');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão dependendo to modo
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Escuro";
    }
});

//Validação do preenchimento do formulario
const form = document.getElementById('form-contato');
const msgSucesso = document.getElementById('mensagem-sucesso');
// Impede o envio se algo estiver errado/faltando
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verificação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Erro: Preencha todos os campos.");
        return;
    }

    // Validação de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        alert("Erro: Insira um e-mail válido.");
        return;
    }

    // mensagem de sucesso e limpa os campos pós envio
    alert("Mensagem enviada com sucesso!");
    form.reset(); // Limpa os campos pós envio
    msgSucesso.style.display = 'block';

    // Apaga a mensagem depois de instantes
    setTimeout(() => {
        msgSucesso.style.display = 'none';
    }, 4000);
});