
const endDate = new Date('2024-11-22T00:00:00').getTime();


const countdown = setInterval(() => {
  
    const now = new Date().getTime();


    const timeLeft = endDate - now;

   
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    
    document.querySelector('.Dia').innerText = days;
    document.querySelector('.Hora').innerText = hours;
    document.querySelector('.minutos').innerText = minutes;
    document.querySelector('.segundos').innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector('.temporizador').innerHTML = "O evento começou!";
    }
}, 1000); 



