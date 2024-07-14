import { Module } from '../core/module'

export class TimerMessageModule extends Module {
    constructor() {
        super('TimerMessageModule', 'Таймер');
    }

    timerCount() {
        const timer = setInterval(() => {
            const idTimer = document.getElementById('timer')
            if (number >= 0) {
                idTimer.textContent = `${number--}`
            } else {
                clearInterval(timer)
                idTimer.textContent = 'Таймер завершил отсчет'
                setTimeout(() => {
                    const timeId = document.getElementById('1')
                    timeId.remove()
                }, 5000)
            }
        }, 1000)
    }


    trigger() {
        console.log('TimerMessageModule triggered');
        // Логика для создания фигуры
        function countdownTimer() {
            const timerWrapper = document.createElement('div')
            timerWrapper.className = 'timer-wrapper'
            timerWrapper.id = '1'
            const timer = document.createElement('div')
            timer.className = 'timer'
            const spanTime = document.createElement('span')
            spanTime.className = 'time'
            spanTime.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            spanTime.id = 'timer'

            timer.append(spanTime)
            timerWrapper.append(timer)

            const body = document.querySelector('body')
            body.append(timerWrapper)

            return timerWrapper
        }


        let number = +prompt('Введите количество секунд для таймера')
        console.log(number)

        if (number > 0 && typeof number === 'number') {
            const seconds = Math.floor((number / 1000) % 60);
            const minutes = Math.floor((number / 1000 / 60) % 60);
            const hours = Math.floor((number / 1000 / 60 / 60) % 24);
        }



        countdownTimer()
    }
}