document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    const mensagemDiv = document.getElementById('mensagem');

    mensagemDiv.style.display = 'block';
    mensagemDiv.className = ''; // Limpa classes anteriores

    // Função de validação de email simples
    const validarEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // 1. Verificar se todos os campos estão preenchidos
    if (!nome || !email || !usuario || !senha || !confirmaSenha) {
        mensagemDiv.classList.add('erro');
        mensagemDiv.textContent = 'Erro: Por favor, preencha todos os campos.';
        return;
    }

    // 2. Verificar email válido
    if (!validarEmail(email)) {
        mensagemDiv.classList.add('erro');
        mensagemDiv.textContent = 'Erro: Por favor, insira um endereço de e-mail válido.';
        return;
    }

    // 3. Verificar comprimento da senha
    if (senha.length < 8) {
        mensagemDiv.classList.add('erro');
        mensagemDiv.textContent = 'Erro: A senha deve ter pelo menos 8 dígitos.';
        return;
    }

    // 4. Verificar se as senhas coincidem
    if (senha !== confirmaSenha) {
        mensagemDiv.classList.add('erro');
        mensagemDiv.textContent = 'Erro: As senhas não coincidem.';
        return;
    }

    // Se todas as validações passarem
    mensagemDiv.classList.add('sucesso');
    mensagemDiv.textContent = 'Cadastro realizado com sucesso!';

    // Opcional: Limpar o formulário após sucesso (descomentar se quiser)
    // document.getElementById('cadastroForm').reset();
});