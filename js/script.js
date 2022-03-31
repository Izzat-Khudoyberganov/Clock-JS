 const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minNum = document.querySelector('.minutes'),
    hourNum = document.querySelector('.hours')

 function clock() {
    let time = new Date(),
       secArr = time.getSeconds() * 6,
       minArr = time.getMinutes() * 6,
       hourArr = time.getHours() * 30;
       
    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
       clock()
    }, 1000);

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
 }
 clock()
 const tabsItem = document.querySelectorAll('.tabsItem')
 tabsContentItem = document.querySelectorAll('.tabsContentItem')
 for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
       for (let j = 0; j < tabsItem.length; j++) {
          tabsItem[j].classList.remove('active')
          tabsContentItem[j].classList.remove('active')
       }
       tabsItem[i].classList.add('active')
       tabsContentItem[i].classList.add('active')
    })
 }
 let stopWatchSeconds = document.querySelector('.stopwatch__seconds'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatch__btn = document.querySelector('.stopwatch__btn'),
    tabsLink__span = document.querySelector('.tabsLink__span')

// Conditionals   
    
 stopwatch__btn.addEventListener('click', () => {
    switch (stopwatch__btn.innerHTML) {
       case 'start':
          stopwatch__btn.textContent = 'stop';
          tabsLink__span.classList.add('active')
          break;
       case 'stop':
          stopwatch__btn.textContent = 'clear';
          tabsLink__span.classList.remove('active')
          tabsLink__span.classList.add('active_clear')
          break
       case 'clear':
          stopwatch__btn.textContent = 'start';
          tabsLink__span.classList.remove('active_clear')
          tabsLink__span.classList.remove('active')
          stopWatchSeconds.innerHTML = 0
          stopwatchMinutes.innerHTML = 0
          stopwatchHours.innerHTML = 0
    }
 })
 
// Function

 function rakursiya() {
    if (stopwatch__btn.innerHTML == 'stop') {
       stopWatchSeconds.innerHTML++
       if (stopWatchSeconds.innerHTML > 59) {
          stopWatchSeconds.innerHTML = 0
          stopwatchMinutes.innerHTML++
       } else if (stopWatchSeconds.innerHTML < 10) {
          stopWatchSeconds.innerHTML = '0' + stopWatchSeconds.innerHTML++
          stopwatchMinutes.innerHTML = '0' + stopwatchMinutes.innerHTML++
          stopwatchHours.innerHTML = '0' + stopwatchHours.innerHTML++
       }
    } else if (stopwatchMinutes.innerHTML > 59) {
       stopwatchMinutes.innerHTML = 0
       stopwatchHours.innerHTML++
    } else if (stopwatchHours.innerHTML == 24) {
       stopwatchMinutes.innerHTML = 0
       stopwatchHours.innerHTML = 0
    } else if (stopwatch__btn.innerHTML == 'start') {
       stopWatchSeconds.innerHTML = 0;
       stopwatchMinutes.innerHTML = 0;
       stopwatchHours.innerHTML = 0;
    }
    setTimeout(rakursiya, 1000);
 }
 rakursiya()