import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor() {
        super('clicks', 'Аналитика кликов');
        console.log('clicksModule created');
        this.counter = 0
        this.clickHandler = this.handleClick.bind(this)
        this.clouseWindow = this.handlerClouseWindow.bind(this)
    }

    trigger() {
        console.log('ClicksModule triggered');
        // Логика для анализа кликов
        this.startClicker()
    }
    modalWindow() {
        let modalOverlay = document.createElement('div')
        modalOverlay.className = 'modal-overlay modal-overlay_hidden'
        let countingModal = document.createElement('div')
        countingModal.className = 'modal-counting'
        let modalCountingAnswer = document.createElement('h3')
        modalCountingAnswer.className = 'modal-counting__answer'
        modalCountingAnswer.textContent = `Вы нажали ${this.counter} раз`
        let closingModalButtons = document.createElement('div')
        closingModalButtons.className = 'closing-modal__buttons'
        let closingModalConfirmButton = document.createElement('button')
        closingModalConfirmButton.className = 'closing-modal__button closing-modal__confirm-button'
        closingModalConfirmButton.textContent = 'Хорошо'

        modalOverlay.append(countingModal)
        countingModal.append(modalCountingAnswer, closingModalButtons)
        closingModalButtons.append(closingModalConfirmButton)
        console.log(modalOverlay)
        return modalOverlay
    }
    handleClick(event) {
        if (event) {
            this.counter += 1
        }
    }
    handlerClouseWindow(event) {
        const { target } = event
        if (target.classList.contains("closing-modal__button")) {
            const div = target.closest('.modal-overlay')
            div.remove()
        }
    }

    startClicker() {
        window.addEventListener('click', this.clickHandler)
        setTimeout(() => {
            const func = this.modalWindow()
            document.body.append(func)
            func.classList.remove('modal-overlay_hidden')
            func.addEventListener('click', this.clouseWindow)
        }, 5000)
    }
}


