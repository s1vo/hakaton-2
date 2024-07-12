import { Module } from '../core/module';

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Случайный фон');
        console.log('BackgroundModule created');
    }

    trigger() {
        console.log('BackgroundModule triggered');
    }

}
