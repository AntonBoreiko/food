
window.addEventListener('DOMContentLoaded', () => {
  //  Tabs
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

  // Timer
  const deadline = '2021-08-26'

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date())
    const days = Math.floor((t / (1000 * 60 * 60 * 24)))
    const seconds = Math.floor((t / 1000) % 60)
    const minutes = Math.floor((t / 1000 / 60) % 60)
    const hours = Math.floor((t / (1000 * 60 * 60) % 24))

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector)
    const days = timer.querySelector('#days')
    const hours = timer.querySelector('#hours')
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
      const t = getTimeRemaining(endtime)
      if (getZero(t.days) < 5) {
        const textDay = document.querySelector('.text_day')
        textDay.innerHTML = 'дня'
        days.innerHTML = getZero(t.days)
      }
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline)
})
