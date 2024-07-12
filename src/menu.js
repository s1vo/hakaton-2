import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector) {
        // Вызов конструктора родительского класса Menu с передачей селектора
        super(selector);

        // Инициализация массива для хранения элементов меню
        this.items = [];

        // Сохранение ссылки на HTML-элемент, соответствующий селектору
        this.el = document.querySelector(selector);

        // Логирование для подтверждения инициализации контекстного меню
        console.log(`ContextMenu initialized with selector: ${selector}`);
    }

    // Метод для открытия меню в заданных координатах (x, y)
    open(x, y) {
        console.log(`Opening menu at (${x}, ${y})`);

        // Установка позиции меню
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;

        // Добавление класса 'open' для отображения меню
        this.el.classList.add('open');
    }

    // Метод для закрытия меню
    close() {
        // Удаление класса 'open' для скрытия меню
        this.el.classList.remove('open');
    }

    // Метод для добавления элемента в меню
    add(item) {
        // Добавление элемента в массив items
        this.items.push(item);

        // Логирование добавленного элемента
        console.log(`Added item: ${item.text}`);

        // Перерисовка меню с новыми элементами
        this.render();
    }

    // Метод для перерисовки меню
    render() {
        // Очистка текущего содержимого меню
        this.el.innerHTML = '';

        // Перебор всех элементов и создание HTML для каждого из них
        this.items.forEach(item => {
            console.log(`Rendering item: ${item.text}`);
            this.el.innerHTML += item.toHTML();
        });

        // Добавление обработчиков событий для каждого элемента меню
        this.el.querySelectorAll('.menu-item').forEach(menuItem => {
            menuItem.addEventListener('click', () => {
                // Получение типа элемента меню
                const type = menuItem.getAttribute('data-type');

                // Поиск соответствующего элемента в массиве items
                const item = this.items.find(i => i.type === type);

                // Вызов метода trigger у найденного элемента
                item.trigger();

                // Закрытие меню после клика на элемент
                this.close();
            });
        });
    }
}
