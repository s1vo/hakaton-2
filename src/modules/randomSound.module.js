import {Module} from '../core/module'

export class RandomSoundModule extends Module {
    constructor() {
        super('RandomSoundModule', 'Случайный звук');
    }

    trigger() {
        console.log('RandomSoundModule triggered');
        // Логика для создания фигуры
    }
}