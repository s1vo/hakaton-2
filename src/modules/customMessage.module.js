import {Module} from '@/core/module'
import {random} from '@/utils'

// Определение класса CustomMessageModule, который наследуется от Module
export class CustomMessageModule extends Module {
    constructor() {
        // Вызов конструктора родительского класса с названием и типом модуля
        super('CustomMessageModule', 'Сообщение');

        // Инициализация массива сообщений
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

        // Привязка метода закрытия сообщения к this
        this.handelCloseClick = this.closeMessage.bind(this);
    };

    // Метод для закрытия сообщения
    closeMessage(event){
        const { target } = event;
        if(target.classList.contains('closeButton')){
            target.closest('.container-alert')?.remove();
        }
    }

    // Метод для вызова случайного сообщения
    trigger() {
        // Получение случайного ID сообщения
        let randomID = random(1,9);
        // Поиск сообщения по ID
        let item = this.messageArray.find(item => item.id === randomID);
        // Вызов метода для отображения сообщения на экране
        this.toHTMLMessage(item.message);
    }

    // Метод для отображения HTML сообщения на странице
    toHTMLMessage(textMessage){
        const body = document.querySelector('body');
        const containerAlert = document.createElement('div');
        containerAlert.className = 'container-alert';
        containerAlert.setAttribute('id','alertBox');

        const alertContent = document.createElement('div');
        alertContent.className = 'alert-content';

        const alertTitle = document.createElement('div');
        alertTitle.className = 'alert-title';
        alertTitle.textContent = 'Уведомление';

        const alertMessage = document.createElement('div');
        alertMessage.className = 'alert-message';
        alertMessage.textContent = `${textMessage}`;

        const closeButton = document.createElement('button');
        closeButton.className = 'closeButton';
        closeButton.textContent = 'x';

        // Сборка структуры HTML сообщения
        alertContent.appendChild(alertTitle);
        alertContent.appendChild(alertMessage);
        containerAlert.appendChild(alertContent);
        containerAlert.appendChild(closeButton);
        body.appendChild(containerAlert);

        // Добавление обработчика события для закрытия сообщения
        closeButton.addEventListener('click', this.handelCloseClick);

        // Удаление сообщения через 5 секунд
        setTimeout(() => containerAlert.remove(), 5000);
    }
}
