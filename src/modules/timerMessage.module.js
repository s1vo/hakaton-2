import { Module } from '../core/module'
import alarm from '../assets/sounds/alarm.mp3'

export class TimerMessageModule extends Module {
    constructor() {
        super('TimerMessageModule', 'Таймер');
    }


    // Создаем HTML-элементы и добавляем их на страницу
    countdownTimer(number) {
        const timerWrapper = document.createElement('div')
        timerWrapper.className = 'timer-wrapper'
        timerWrapper.id = 'delTimer'
        const timer = document.createElement('div')
        timer.className = 'timer'
        const spanTime = document.createElement('span')
        spanTime.className = 'time'
        spanTime.textContent = this.formatTimer(number)
        spanTime.id = 'timer'

        timer.append(spanTime)
        timerWrapper.append(timer)

        const body = document.querySelector('body')
        body.append(timerWrapper)

        return timerWrapper
    }


    //Конвертируем число отправленное пользователем в часы, минуты, секунды
    formatTimer(number) {
        const seconds = number % 60;
        const minutes = Math.floor((number % 3600) / 60);
        const hours = Math.floor((number / 3600));
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }


    // Запускает аудио по окончанию таймера
    soundOfTimerEnd() {
        const audio = new Audio(alarm)
        audio.play()
    }


    // Запускает таймер обратного отсчета
    timerCount(number) {
        const timer = setInterval(() => {
            const idTimer = document.getElementById('timer')
            if (number >= 0) {
                idTimer.textContent = this.formatTimer(number)
                number--
            } else {
                clearInterval(timer)
                idTimer.textContent = 'Таймер завершил отсчет'
                this.soundOfTimerEnd()
                setTimeout(() => {
                    const timeId = document.getElementById('delTimer')
                    timeId.remove()
                }, 5000)
            }
        }, 1000)
    }


    trigger() {
        console.log('TimerMessageModule triggered');
        // Логика для создания фигуры
        // Запрашиваем у пользователя число
        let number = +prompt('Введите количество секунд для таймера')
        console.log(number)
        // Проверяем чтобы пользователь ввел корректное число, а не другие символы
        // Если все введено правильно то код выполняется
        // Если нет, то выводим модальное окно с сообщением об ошибке
        if (number > 0 && typeof number === 'number') {
            this.countdownTimer(number)
            this.timerCount(number)
        } else {
            alert('Данные введены не правильно')
        }
    }
}
