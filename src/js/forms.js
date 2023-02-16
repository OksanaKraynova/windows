import checkNum from './checkNum'

const forms = state => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input')

    checkNum('input[name="user-phone"]')

    const message = {
        loading: 'Загрузка...',
        succuss: 'Спасибо! Мы скоро свяжемся с вами',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading

        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text()
    }
    const clearinputs = () => {
        inputs.forEach(item => item.value = '')
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault()

            let statusMessage = document.createElement('div')

            statusMessage.classList.add('status')
            item.append(statusMessage)

            const formData = new FormData(item)
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formdata.append(key, state[key])
                }
            }
            postData('./server.php', formData)
                .then(res => statusMessage.textContent = message.succuss)
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearinputs()
                    setTimeout(() => statusMessage.remove(), 3000)
                    const btns = document.querySelectorAll('.form-promo__btn')
                    btns.forEach(btn => {
                        btn.disabled = true
                        setTimeout(() => {
                            btn.disabled = false
                        }, 3000)
                    })

                })
        })
    })
}

export default forms