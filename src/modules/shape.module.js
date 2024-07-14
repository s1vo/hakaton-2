import {Module} from '@/core/module'
import {random, getRandomColor} from '@/utils'

export class ShapeModule extends Module {
    constructor() {
        super('ShapeModule', 'Случайная фигура');
    }

    trigger() {
        console.log('ShapeModule triggered');

        try {
            // Получаем размеры окна страницы браузера
            const windowInnerWidth = window.innerWidth - 64;
            const windowInnerHeight = window.innerHeight - 64;

            // Удаляем холст, если таков уже имеется на странице
            const isCanvas = document.querySelector('canvas');
            if (isCanvas) isCanvas.remove();

            // Создаем хост
            this.createCanvas(windowInnerWidth, windowInnerHeight)

            const drawingCanvas = document.getElementById('canvas');

            // Определяем контекст рисования на холсте как 2D
            const ctx = drawingCanvas.getContext('2d');

            const arrayFigures = ['rectangle','circle','triangle'];

            // Рандомно выбирается фигура из массива
            const figure = arrayFigures[random(0,arrayFigures.length - 1)];

            // Рисуем на холсте фигуру, полученную случайным образом
            switch(figure) {
                case 'rectangle':
                    this.randomRectangle(ctx, windowInnerWidth, windowInnerHeight);
                    break;
                case 'circle':
                    this.randomCircle(ctx, windowInnerWidth, windowInnerHeight);
                    break;
                case 'triangle':
                    this.randomTriangle(ctx, windowInnerWidth, windowInnerHeight);
                    break;
                default:
                    return;
            }

            setTimeout(() => drawingCanvas.remove(), 3000);

        } catch (error) {
            console.error('Ошибка: не найдет контекст холста', error);
        }

    }

    createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.className = 'canvas';
        canvas.width = width.toString();
        canvas.height = height.toString();
        canvas.textContent = 'Извините, ваш браузер нет поддерживает canvas элемент.';
        document.body.appendChild(canvas);
    }

    randomRectangle(ctx, windowInnerWidth, windowInnerHeight) {
        // Создание прямоугольника
        const width = random(10, 400);
        const height = random(10, 400);
        const x = random(1, windowInnerWidth - width);
        const y = random(1, windowInnerHeight - height);

        // Получаем рандомный цвет для фигуры
        ctx.fillStyle = getRandomColor();
        // Строим прямоугольник
        ctx.fillRect(x, y, width, height);
    }

    randomCircle(ctx, windowInnerWidth, windowInnerHeight) {
        // Создание круга
        const radius = random(10, 180);
        const x = random(radius, windowInnerWidth - radius);
        const y = random(radius, windowInnerHeight - radius);

        // Получаем рандомный цвет для фигуры
        ctx.fillStyle = getRandomColor();
        // Строим круг
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    }

    randomTriangle(ctx, windowInnerWidth, windowInnerHeight) {
        // Создание треугольника
        // Получаем случайным образом числа для начальной точки
        const x1 = random(1, windowInnerWidth - 1);
        const y1 = random(1, windowInnerHeight - 1);

        // Получаем случайным образом числа для следующих точек
        const x2 = random(1, windowInnerWidth - 1);
        const y2 = random(1, windowInnerHeight - 1);

        const x3 = random(1, windowInnerWidth - 1);
        const y3 = random(1, windowInnerHeight - 1);

        // Получаем рандомный цвет для фигуры
        ctx.fillStyle = getRandomColor();
        // Строим треугольник
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }

}
