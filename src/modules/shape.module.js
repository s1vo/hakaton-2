import {Module} from '../core/module'

export class ShapeModule extends Module {
    constructor() {
        super('ShapeModule', 'Случайная фигура');
    }

    trigger() {
        console.log('ShapeModule triggered');
        // Логика для создания фигуры
    }
}