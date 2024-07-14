import { Module } from '@/core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&units=metric&appid=${key}`;
export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Погода в Москве');
        this.flagForRender = true
        this.flagOpen = false

        this.dataFromFetch = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                this.dataFromFetch = json
            })
            .catch(error => {
                this.flagForRender = false
                console.error('Error fetching weather data:', error)
            });
    }
    getLocalTime(){
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `Сегодня: ${year}/${month}/${day} - Время:${hours}:${minutes}:${seconds}`;
    }
    removeModal(event){
        event.target.parentElement.remove()
    }
    getRender() {
        if(!this.flagForRender){
            const errorMessage = document.createElement('div')
            errorMessage.textContent = "Не получилось получить информацию, попробуйте позже..."
            errorMessage.className = 'weather_cover'
            document.body.append(errorMessage)
            return
        }

        const cover = document.createElement('div')
        cover.className = 'weather_cover'

        const coverTitle = document.createElement('p')
        coverTitle.className = 'weather_cover-title'
        coverTitle.textContent = 'Погода в Москве'
        document.body.append(cover)
        cover.append(coverTitle)

        const currentTime = document.createElement('div')
        currentTime.className = 'weather_currentTime'
        currentTime.textContent = `${this.getLocalTime()}`
        cover.append(currentTime)

        const temperature = document.createElement('p')
        temperature.classList = 'weather_temperature'
        temperature.textContent = `Температура воздуха: ${this.dataFromFetch.main.temp} ℃`
        cover.append(temperature)

        const wind = document.createElement('p')
        wind.className = 'weather_wind'
        wind.textContent = `Скорость ветра: ${this.dataFromFetch.wind.speed} м/с`
        cover.append(wind)

        const humidity = document.createElement('div')
        humidity.textContent = `Влажность: ${this.dataFromFetch.main.humidity}%`
        cover.append(humidity)

        const icon = document.createElement('img')
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${this.dataFromFetch.weather[0].icon}@2x.png`)
        cover.append(icon)

        const btn = document.createElement('button')
        btn.textContent = 'Закрыть'
        btn.className = 'btnClose'
        cover.append(btn)
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            this.removeModal(e)
            this.flagOpen = false
        })
    }
    trigger() {
        try {
            if (!this.flagOpen) {
                this.flagOpen = true
                this.getRender()
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
}
