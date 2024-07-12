import {Module} from '../core/module'

export class TimerMessageModule extends Module {
    constructor() {
        super('TimerMessageModule', 'Таймер');
    }

    trigger() {
        console.log('TimerMessageModule triggered');
        // Логика для создания фигуры
    }
}