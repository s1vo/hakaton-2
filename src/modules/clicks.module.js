import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor() {
        super('clicks', 'Аналитика кликов');
        console.log('clicksModule created');
    }

    trigger() {
        console.log('ClicksModule triggered');
        // Логика для анализа кликов
        function modalWindow() {
            let modalOverlay = document.createElement('div')
            modalOverlay.className = 'modal-overlay modal-overlay_hidden'
            let countingModal = document.createElement('div')
            countingModal.className = 'modal-counting'
            let modalCountingAnswer = document.createElement('h3')
            modalCountingAnswer.className = 'modal-counting__answer'
            modalCountingAnswer.textContent = `Вы нажали ${counter} раз`
            let closingModalButtons = document.createElement('div')
            closingModalButtons.className = 'closing-modal__buttons'
            let closingModalConfirmButton = document.createElement('button')
            closingModalConfirmButton.className = 'closing-modal__button closing-modal__confirm-button'
            closingModalConfirmButton.textContent = 'Хорошо'

            modalOverlay.append(countingModal)
            deleteModal.append(modalCountingAnswer, closingModalButtons)
            deleteModalButtons.append(closingModalConfirmButton)

            return modalOverlay
        }

        let counter = 0
        window.addEventListener('click', event => {
            // console.log(event)
            if (event) {
                counter += 1
            }
            console.log(counter)
        })
        setTimeout(() => {
            const func = modalWindow()
            const body = document.querySelector("body")
            body.append(func)
            func.classList.remove('modal-overlay_hidden')

            func.addEventListener('click', event => {
                const { target } = event
                const modalButton = target
                if (modalButton.innerText === 'Хорошо') {
                    func.classList.add('modal-overlay_hidden')
                    func.remove()
                }
            })
        }, 5000)
    }
}

