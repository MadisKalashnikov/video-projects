const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

const futureDate = new Date(2022, 5, 10, 17, 27, 59)
console.log(futureDate)
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const day = weekdays[futureDate.getDay()]
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

giveaway.textContent = `giveaway ends on ${year}, ${date} ${month} ${hours}:${minutes}AM`

const futureTime = futureDate.getTime()
const getRemainingTime = () => {
  const today = new Date().getTime()
  const t = futureTime - today
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  // values in corresponding names
  let days = Math.floor(t / oneDay)
  let hrs = Math.floor((t % oneDay) / oneHour)
  let mins = Math.floor((t % oneHour) / oneMin)
  let seconds = Math.floor((t % oneMin) / 1000)
  console.log(days, hours, minutes, seconds)
  // values arr
  const format = (item) => {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }
  const values = [days, hrs, mins, seconds]
  items.forEach((item, index) => {
    item.textContent = format(values[index])
  })
  if (t < 1000) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">This giveaway has ended</h4>`
  }
  
}
const countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()