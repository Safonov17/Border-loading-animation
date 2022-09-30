const container = document.querySelector('.container')
const percent = document.querySelector('#percent')
let periodValue = 0

let increament = setInterval(() => {
    periodValue++;
    percent.textContent = `${periodValue}%`
    
    if (periodValue == 100) {
        clearInterval(increament)
        container.classList.remove('active')
    }
}, 50)