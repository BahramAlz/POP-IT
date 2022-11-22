export const alertTimerEl = document.getElementById('alertTimer');
export const alertTimer = () => {
    alertTimerEl.style.display = "block";

    let currentSecond = 3;
    let timerInterval = setInterval(() => {

        alertTimerEl.innerHTML = ``;
        alertTimerEl.innerHTML = `<h1>${currentSecond}<h1>`;
        currentSecond -= 1;
        if (currentSecond < 0) {
            clearInterval(timerInterval);
            alertTimer.innerHTML = ``;
        }

    }, 1000);
}
