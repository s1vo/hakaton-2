import {Module} from '@/core/module'
import {random} from '@/utils'
import {sounds} from '@/assets/sounds/sounds'

export class RandomSoundModule extends Module {
    constructor() {
        super('RandomSoundModule', 'Случайный звук');
    }

    trigger() {
        try {
            this.playSound()
        } catch (error) {
            console.error('Ошибка: Не найдет аудио файл для воспроизведения', error);
        }
    }

    playSound() {
        console.log('RandomSoundModule triggered');

        // Получаем массив аудио файлов
        const arraySounds = Object.values(sounds)

        // Создаем экземпляр класса Аудио для проигрывания аудио файлов
        // и передаем в виде параметра случайно выбранный аудио файл
        const audio = new Audio(arraySounds[random(0, arraySounds.length - 1)]);
        audio.play();
    }
}
