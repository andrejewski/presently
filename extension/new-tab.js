function pad(len, char, str) {
  str = '' + str
  while(str.length < len) str = char + str
  return str
}

function humanHour (date) {
  let hour = date.getHours() % 12
  if (!hour) {
    hour = 12
  }
  return hour
}

function formatTime (date) {
  return `${pad(2, '0', humanHour(date))}:${pad(2, '0', date.getMinutes())}:${pad(2, '0', date.getSeconds())}`
}

const $time = document.getElementById('time')

function updateTime () {
  const date = new Date()
  $time.innerText = formatTime(date)
}

setInterval(updateTime, 500)
updateTime()