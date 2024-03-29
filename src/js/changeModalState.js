import checkNum from './checkNum'

const changeModalState = state => {
    const windowForm = document.querySelectorAll('.popup-calc__item'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType= document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.popup-type__checkbox')

    const bindActionToElems = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i
                        break
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
                            elem.forEach((box, j) => {
                                box.checked = false
                                if(i == j) box.checked = true
                            })
                        } else{
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT': 
                        state[prop] =  item.value
                        break
                }
                console.log(state);
            })
        });
    }
    checkNum('#width')
    checkNum('#height')

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('input', windowProfile, 'profile')
}

export default changeModalState