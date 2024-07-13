import {Module} from '../core/module'
import {random} from '../utils'

import among from '../assets/sounds/among.mp3'
import bruh from '../assets/sounds/bruh.mp3'
import error from '../assets/sounds/error.mp3'
import tuturu from '../assets/sounds/tuturu.mp3'
import omg from '../assets/sounds/omg.mp3'
import nope from '../assets/sounds/nope.mp3'
import nice from '../assets/sounds/nice.mp3'

export class RandomSoundModule extends Module {
    constructor() {
        super('RandomSoundModule', 'Случайный звук');
    }

    trigger() {
        console.log('RandomSoundModule triggered');
        // Логика для создания звука
        const arraySounds = [among, bruh, error, tuturu, omg, nope, nice]
        const audio = new Audio(arraySounds[random(0, arraySounds.length - 1)]);
        audio.play();
    }
}
