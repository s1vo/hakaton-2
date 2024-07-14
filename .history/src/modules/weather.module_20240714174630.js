import { Module } from '../core/module';
const key = '2d0e848e05679623b697a492507d85ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&units=metric&appid=${key}`;
'https://openweathermap.org/img/wn/02d@2x.png'
export class WeatherModule extends Module {
    constructor() {
        super('weather', 'Погода в Москве');
        this.flagForRender = true

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
    getLocalTime() {
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
        
    }
    trigger() {
        

    }
}
