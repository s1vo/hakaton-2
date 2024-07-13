import {Module} from '../core/module'
import {random} from '../utils'

export class ShapeModule extends Module {
    constructor() {
        super('ShapeModule', 'Случайная фигура');
    }

    trigger() {
        console.log('ShapeModule triggered');
        // Логика для создания фигуры
        const windowInnerWidth = window.innerWidth - 64;
        const windowInnerHeight = window.innerHeight - 64;

        const width = random(windowInnerWidth, windowInnerWidth);
        const height = random(windowInnerHeight, windowInnerHeight);

        const isCanvas = document.querySelector('canvas');
        if (isCanvas) isCanvas.remove();

        const canvas = document.createElement('canvas');
        canvas.id = 'smile';
        canvas.width = width.toString();
        canvas.height = height.toString();
        canvas.style.display = 'block';
        canvas.style.position = 'absolute';
        canvas.style.top = '2rem';
        canvas.style.left = '2rem';
        canvas.style.right = '2rem';
        canvas.style.bottom = '2rem';
        canvas.style.zIndex = '-1';
        canvas.textContent = 'Извините, ваш браузер нет поддерживает canvas элемент.';
        document.body.appendChild(canvas);


        let drawingCanvas = document.getElementById('smile');
        if(drawingCanvas && drawingCanvas.getContext) {
            let ctx  = drawingCanvas.getContext('2d');

            const arrayFigures = ['rectangle','circle','triangle'];
            const figure = arrayFigures[random(0,arrayFigures.length - 1)];

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

        }
    }

    randomRectangle(ctx, windowInnerWidth, windowInnerHeight) {
        // Прямоугольник / Квадрат
        const width = random(10, 400);
        const height = random(10, 400);
        const x = random(1, windowInnerWidth - width);
        const y = random(1, windowInnerHeight - height);

        ctx.fillStyle = this.randomColor();
        ctx.fillRect(x, y, width, height);
    }

    randomCircle(ctx, windowInnerWidth, windowInnerHeight) {
        // Круг
        const radius = random(10, 180);
        const x = random(radius, windowInnerWidth - radius);
        const y = random(radius, windowInnerHeight - radius);

        ctx.fillStyle = this.randomColor();
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    }

    randomTriangle(ctx, windowInnerWidth, windowInnerHeight) {
        // Треугольник
        const x1 = random(1, windowInnerWidth - 1);
        const y1 = random(1, windowInnerHeight - 1);

        const x2 = random(1, windowInnerWidth - 1);
        const y2 = random(1, windowInnerHeight - 1);

        const x3 = random(1, windowInnerWidth - 1);
        const y3 = random(1, windowInnerHeight - 1);

        ctx.fillStyle = this.randomColor();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }

    randomColor() {
        const arrayValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += arrayValues[random(0 , arrayValues.length - 1)];
        }
        return color
    }
}
