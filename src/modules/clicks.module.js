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
            let deleteModal = document.createElement('div')
            deleteModal.className = 'modal-counting'
            let deleteModalQuestion = document.createElement('h3')
            deleteModalQuestion.className = 'modal-counting__answer'
            deleteModalQuestion.textContent = `Вы нажали ${counter} раз`
            let deleteModalButtons = document.createElement('div')
            deleteModalButtons.className = 'closing-modal__buttons'
            let deleteModalConfirmButton = document.createElement('button')
            deleteModalConfirmButton.className = 'closing-modal__button closing-modal__confirm-button'
            deleteModalConfirmButton.textContent = 'Хорошо'

            modalOverlay.append(deleteModal)
            deleteModal.append(deleteModalQuestion, deleteModalButtons)
            deleteModalButtons.append(deleteModalConfirmButton)

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

