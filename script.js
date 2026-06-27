// Aguarda todo o documento HTML (DOM) ser carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO TEMA ESCURO ---
const btnTema = document.getElementById("btn-tema");

// 1. Verifica se o usuário já visitou o site antes e ativou o tema escuro
if (localStorage.getItem("tema-preferido") === "escuro") {
    document.body.classList.add("dark-theme");
    btnTema.textContent = "☀️ Claro";
}

// 2. Adiciona o evento de clique no botão para alternar o tema
btnTema.addEventListener("click", function() {
    // Liga/Desliga a classe .dark-theme no <body>
    document.body.classList.toggle("dark-theme");
    
    // Se o body agora contém a classe dark-theme, muda o texto e salva no navegador
    if (document.body.classList.contains("dark-theme")) {
        btnTema.textContent = "☀️ Claro";
        localStorage.setItem("tema-preferido", "escuro"); // Salva a preferência
    } else {
        btnTema.textContent = "🌙 Escuro";
        localStorage.setItem("tema-preferido", "claro");  // Salva a preferência
    }
});
// ---------------------------------
    
    // Capturando o elemento do formulário pelo ID
    const form = document.getElementById("form-contato");

    // Adicionando o evento de "submit" (envio) ao formulário
    form.addEventListener("submit", function(evento) {
        
        // Previne o recarregamento automático da página
        evento.preventDefault();

        // Capturando os valores digitados e os campos de mensagem de erro
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        
        const erroNome = document.getElementById("erro-nome");
        const erroEmail = document.getElementById("erro-email");
        const erroMensagem = document.getElementById("erro-mensagem");
        const sucessoMsg = document.getElementById("sucesso-msg");

        // Variável de controle de validação
        let formularioValido = true;

        // 1. Validando o Nome
        if (nome === "") {
            erroNome.style.display = "block";
            formularioValido = false;
        } else {
            erroNome.style.display = "none";
        }

        // 2. Validando o E-mail (Verificação simples de formato)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !regexEmail.test(email)) {
            erroEmail.style.display = "block";
            formularioValido = false;
        } else {
            erroEmail.style.display = "none";
        }

        // 3. Validando a Mensagem
        if (mensagem === "") {
            erroMensagem.style.display = "block";
            formularioValido = false;
        } else {
            erroMensagem.style.display = "none";
        }

        // Se todos os campos estiverem válidos
        if (formularioValido) {
            // Exibe mensagem de sucesso
            sucessoMsg.style.display = "block";
            
            // Limpa os campos do formulário
            form.reset();

            // Oculta a mensagem de sucesso após 4 segundos
            setTimeout(() => {
                sucessoMsg.style.display = "none";
            }, 4000);
        }
    });
});