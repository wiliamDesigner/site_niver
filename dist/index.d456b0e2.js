// Data de término: 22 de novembro de 2024
const endDate = new Date("2024-11-22T00:00:00").getTime();
// Função que atualiza o temporizador a cada segundo
const countdown = setInterval(()=>{
    // Data e hora atuais
    const now = new Date().getTime();
    // Calcula a diferença de tempo entre a data atual e a data de término
    const timeLeft = endDate - now;
    // Converte a diferença em dias, horas, minutos e segundos
    const days = Math.floor(timeLeft / 86400000);
    const hours = Math.floor(timeLeft % 86400000 / 3600000);
    const minutes = Math.floor(timeLeft % 3600000 / 60000);
    const seconds = Math.floor(timeLeft % 60000 / 1000);
    // Exibe os valores no HTML sem adicionar os rótulos
    document.querySelector(".Dia").innerText = days;
    document.querySelector(".Hora").innerText = hours;
    document.querySelector(".minutos").innerText = minutes;
    document.querySelector(".segundos").innerText = seconds;
    // Se o tempo acabar, para o cronômetro
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".temporizador").innerHTML = "O evento come\xe7ou!";
    }
}, 1000); // Executa a cada 1000 ms (1 segundo)
 /*Estilo de celular */ 

//# sourceMappingURL=index.d456b0e2.js.map
