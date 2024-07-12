import {Module} from '../core/module'

export class CustomMessageModule extends Module {
    constructor() {
        super('CustomMessageModule', 'Сообщение');
    }

    trigger() {
        console.log('CustomMessageModule triggered');
        // Логика для создания фигуры
    }
}