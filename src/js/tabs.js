const tabs = (headerSelector, tabSelector, contentSelector, activeTab, display = 'flex') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    const hideTab = () => {
        content.forEach(item => item.style.display = 'none')
        tab.forEach(item => item.classList.remove(activeTab))
    }

    const showTab = (i = 0) => {
        content[i].style.display = display
        tab[i].classList.add(activeTab)
    }

    header.addEventListener('click', e => {
        e.preventDefault()
      tab.forEach((btn, i) => {
          btn.addEventListener('click', () => {
              hideTab()
              btn.classList.add(activeTab)
              content[i].style.display= 'flex'
          })
      })
    })

    hideTab()
    showTab()
}
export default tabs