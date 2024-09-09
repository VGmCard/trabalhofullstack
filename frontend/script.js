document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const rua = document.getElementById('nome').value;
    const cidade = document.getElementById('cpf').value;
    const estado = document.getElementById('telefone').value;

const pessoaData = {
    nome,
    cpf,
    telefone
};

try {
    const reponse = await fetch('http://localhost:3000;api/enderecos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoaData)
    });

    const result = await Response.json();

    if (Response.ok) {
        document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
        document.getElementById('formPessoa').reset();
    } else {
        document.getElementById('message').innerText = `Erro: ${result.message}`;
    }
} catch (error) {
    document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
}
});