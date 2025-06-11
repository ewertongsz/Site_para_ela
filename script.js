const frases = [
    "Você é a melhor parte do meu dia.",
    "Te amo mais a cada segundo!",
    "Seu sorriso ilumina meu mundo.",
    "Com você, tudo é mais bonito.",
    "Você é meu presente favorito da vida.",
    "Minha Heleninha"
];

function mostrarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
}

function adivinhar() {
    const numeroCerto = Math.floor(Math.random() * 10) + 1;
    const palpite = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (palpite == numeroCerto) {
        resultado.innerText = "Aeeee! Acertou, amor! 💘";
    } else {
        resultado.innerText = "Hmmm... Tenta de novo, meu amor! 😘";
    }
}
    const perguntas = [
    {
        pergunta: "Qual foi o nosso primeiro encontro?",
        opcoes: ["No shopping", "Na escola", "No parque", "Na Balada"],
        resposta: "Na Balada"
    },
    {
        pergunta: "Qual é a cor favorita dele?",
        opcoes: ["Azul", "Rosa", "Vermelho", "Verde"],
        resposta: "Vermelho"
    },
    {
        pergunta: "Quantos anos e meses estamos juntos?",
        opcoes: ["2 anos e 2 meses", "2 anos e 5 meses", "2 anos e 6 meses",],
        resposta: "2 anos e 5 meses" 
    }
];

let indiceAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const q = perguntas[indiceAtual];
    document.getElementById("quiz-pergunta").innerText = q.pergunta;
    const opcoesDiv = document.getElementById("quiz-opcoes");
    opcoesDiv.innerHTML = "";

    q.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(opcao);
        opcoesDiv.appendChild(btn);
    });

    document.getElementById("quiz-feedback").innerText = "";
    document.getElementById("quiz-fim").innerText = "";
}

function verificarResposta(opcaoEscolhida) {
    const correta = perguntas[indiceAtual].resposta;
    const feedback = document.getElementById("quiz-feedback");

    if (opcaoEscolhida === correta) {
        feedback.innerText = "Acertou! 😍";
        pontuacao++;
    } else {
        feedback.innerText = `Ops! A resposta certa era "${correta}". 😅`;
    }
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("quiz-pergunta").innerText = "";
        document.getElementById("quiz-opcoes").innerHTML = "";
        document.getElementById("quiz-feedback").innerText = "";
        document.getElementById("quiz-fim").innerText = `Você acertou ${pontuacao} de ${perguntas.length}! Te amo! ❤️`;
    }
}

// Iniciar quiz automaticamente
mostrarPergunta();
