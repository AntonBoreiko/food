import './script'

window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.body.querySelectorAll('.tabheader__item')
  const tabsContent = document.querySelectorAll('.tabcontent')
  const tabsParent = document.querySelector('.tabheader__items')

  function hideTabConstent() {
    tabsContent.forEach(item => {
      item.style.display = 'none'
    })

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showTabConstent(i = 0) {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
  }
  hideTabConstent()
  showTabConstent()

  tabsParent.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabConstent()
          showTabConstent(i)
        }
      })
    }
  })
})
