import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor() {
        super('clicks', 'Аналитика кликов');
        console.log('clicksModule created');
    }

    trigger() {
        console.log('ClicksModule triggered');
        // Логика для анализа кликов
    }
}