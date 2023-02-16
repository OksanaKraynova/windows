const images = () => {
    const imgPopup = document.createElement('div'),
    worksSection  = document.querySelector('.works'),
    bigImage = document.createElement('img')

    imgPopup.classList.add('popup')
    worksSection.append(imgPopup)

    imgPopup.style.cssText = `
        display: none;
        align-items: center;
        justify-content: center;
    `
    imgPopup.append(bigImage)

    worksSection.addEventListener('click', e => {
        e.preventDefault()
        const target = e.target
        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex'
            const path = target.parentNode.getAttribute('href')

            bigImage.setAttribute('src', path)
        }
        if(target && target.matches('div.popup')) imgPopup.style.display = 'none'
    })
}

export default images