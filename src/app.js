import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import {ClicksModule} from "./modules/clicks.module";
import {CustomMessageModule} from "./modules/customMessage.module";
import {ShapeModule} from "./modules/shape.module";
import {TimerMessageModule} from "./modules/timerMessage.module";
import {RandomSoundModule} from "./modules/randomSound.module";
import { WeatherModule } from './modules/weather.module';

document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('#menu');

    // Добавление модулей в меню
    const backgroundModule = new BackgroundModule();
    const clicksModule = new ClicksModule();
    const customMessageModule = new CustomMessageModule();
    const shapeModule = new ShapeModule();
    const timerMessageModule = new TimerMessageModule();
    const randomSoundModule = new RandomSoundModule();
    const weatherModule = new WeatherModule()

    menu.add(clicksModule);
    menu.add(backgroundModule);
    menu.add(customMessageModule);
    menu.add(shapeModule);
    menu.add(randomSoundModule);
    menu.add(timerMessageModule);
    menu.add(weatherModule);

    // Определение функции-обработчика для правого клика мыши
    const handleContextMenu = (event) => {
        if (event.button === 2) { // Проверяем, что это правая кнопка мыши
            event.preventDefault();
            menu.open(event.clientX, event.clientY);
        }
    };

    const addEventListeners = () => {
        document.addEventListener('contextmenu', handleContextMenu);
    };

    const removeEventListeners = () => {
        document.removeEventListener('contextmenu', handleContextMenu);
    };

    // Удаление существующих обработчиков и добавление новых
    removeEventListeners();
    addEventListeners();
});
