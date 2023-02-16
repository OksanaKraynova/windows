const modals = () => {
    const disableScroll = () => {
        if (document.disableScroll) return;
        const widthScroll = window.innerWidth - document.body.offsetWidth;
        document.disableScroll = true
        document.body.dbScrollY = window.scrollY;
        document.body.style.cssText = `
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0;
            top: ${-window.scrollY}px;
            overflow: hidden;
            padding-right: ${widthScroll}px;
        `
    }
    
    const enableScroll = () => {
        document.disableScroll = false
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY
        })
    }
    const bindModal = (triggerSelector, modalSelector, closeBtnSelector,  closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeBtnSelector),
            windows = document.querySelectorAll('[data-modal]')
           

            trigger.forEach(item => {
                item.addEventListener('click', (event) => {
                    if (event.target) event.preventDefault();
                    windows.forEach(item => item.style.display = 'none')
                    modal.style.display = 'block'
                    disableScroll()
                })
            })
       

        windows.forEach(item => item.style.display = 'none')
        close.addEventListener('click', () => {
            windows.forEach(item => item.style.display = 'none')
            modal.style.display = 'none'
            enableScroll()
        })
        modal.addEventListener('click', e => {
            if(e.target === modal && closeClickOverlay){
                windows.forEach(item => item.style.display = 'none')
                modal.style.display = 'none'
                enableScroll()
            }
          
        })
    }
    bindModal('.header__enginer', '.popup-engineer', '.popup__close')
    bindModal('.link-call', '.popup-call', '.popup-call__close')
     bindModal('.feedback__link', '.popup-call', '.popup-call__close')
     bindModal('.card-glazing__btn', '.popup-calc', '.popup-close')
     bindModal('.popup-calc__btn', '.popup-type', '.popup-type__close', false)
     bindModal('.popup-type__next', '.popup-contacts', '.popup-contacts__close', false)

     
}

export default modals