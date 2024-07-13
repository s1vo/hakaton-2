import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&units=metric&appid=${key}`;

export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Погода в Москве');
        console.log('WeatherModule created');

        this.dataFromFetch = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                this.dataFromFetch = json
                console.log('json', json);
                console.log('this.dataFromFetch FETCH', this.dataFromFetch);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }
    getLocalTime() {
        const now = new Date();
    
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
        const day = String(now.getDate()).padStart(2, '0');
    
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `Сегодня: ${year}/${month}/${day} - Время:${hours}:${minutes}:${seconds}`;
    }

    trigger() {
        console.log('this.dataFromFetch', this.dataFromFetch.main.temp);
        const cover = document.createElement('div')
        cover.className = 'wether_cover'
        // cover.textContent = 'Погода в Москве'
        const coverTitle = document.createElement('p')
        coverTitle.className = 'wether_cover-title'
        coverTitle.textContent = 'Погода в Москве'
        document.body.append(cover)
        cover.append(coverTitle)

        const currentTime = document.createElement('div')
        currentTime.className = 'wether_currentTime'
        currentTime.textContent = `${this.getLocalTime()}`
        cover.append(currentTime)

        const temperature = document.createElement('p')
        temperature.textContent = `Температура воздуха: ${this.dataFromFetch.main.temp} ℃`
        cover.append(temperature)

        const wind = document.createElement('p')
        wind.textContent = `Скорость ветра: ${this.dataFromFetch.wind.speed} м/с`
        cover.append(wind)

    }
}
