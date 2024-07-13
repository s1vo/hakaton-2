import {Module} from '../core/module'
import {random} from '../utils'


export class CustomMessageModule extends Module {
    constructor() {
        super('CustomMessageModule', 'Сообщение');
        this.messageArray = [
            {id:0, message:"Хорошего дня!"},
            {id:1, message:"Отличного настроения!"},
            {id:2, message:"Пусть сегодня на всё хватает сил!"},
            {id:3, message:" Пусть день принесёт много новых идей!"},
            {id:4, message:"Сказочного настроения!"},
            {id:5, message:"Пусть будет много хороших событий и вестей!"},
            {id:6, message:"Больше радости, смеха!"},
            {id:7, message:"Улыбайся и наслаждайся каждым мгновением!"},
            {id:8, message:"Вспомни о мечте, зафиксируй и двигайся к ней – все получится!"},
            {id:9, message:"Начни с улыбки, и каждый твой день будет счастливым!"}
        ];
    };


    trigger() {

        const body = document.querySelector('body');
        const conteinerAlert = document.createElement('div');
        conteinerAlert.className = 'container-alert';
        conteinerAlert.setAttribute('id','alertBox');

        const alertContent = document.createElement('div');
        alertContent.className = 'alert-content';

        const alertTitle = document.createElement('div');
        alertTitle.className = 'alert-title';
        alertTitle.textContent = 'Уведомление';

        const alertMessage = document.createElement('div');
        alertMessage.className = 'alert-message';

        const closeButton = document.createElement('button');
        closeButton.className = 'closeButton';
        closeButton.textContent = 'x';

        alertContent.appendChild(alertTitle);
        alertContent.appendChild(alertMessage);
        conteinerAlert.appendChild(alertContent);
        conteinerAlert.appendChild(closeButton);
        body.appendChild(conteinerAlert);
        
        closeButton.addEventListener('click', (event) => conteinerAlert.remove());

        let randomID = random(1,9);
        let item = this.messageArray.find(item => item.id === randomID);
        alertMessage.textContent = `${item.message}`;
        
        setTimeout(() => conteinerAlert.remove(), 5000);

    }
}