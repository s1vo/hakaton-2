import { Module } from '@/core/module';
import {getRandomColor} from '@/utils';

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Случайный фон');
        console.log('BackgroundModule created');
    }

    trigger() {
        let backColor = getRandomColor();
        const body = document.querySelector('body');
        body.style.backgroundColor = `${backColor}`
    }
}
