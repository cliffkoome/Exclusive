dayjs.extend(dayjs_plugin_duration);

const targetDate = dayjs('2025-02-23T12:40:00');
const targetDate2 = dayjs('2025-02-24T17:00:00');

function calculateCountDownFlashSales() {
    const now = dayjs();
    const diff = targetDate.diff(now);

    if (diff <= 0) {
        console.log("The target time has passed!");
        return;
    }

    const diffDuration = dayjs.duration(diff);
    let days = Math.floor(diffDuration.asDays());
    let hours = diffDuration.hours();
    let minutes = diffDuration.minutes();
    let seconds = diffDuration.seconds();

    if (days < 10) {
        days = '0'+ days;
      }
      if (hours < 10) {
        hours = '0'+ hours;
      }
      if (minutes < 10) {
        minutes = '0'+ minutes;
      }
      if (seconds < 10) {
        seconds = '0'+ seconds;
      }
    

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hrs').innerHTML = hours;
    document.querySelector('.mins').innerHTML = minutes;
    document.querySelector('.secs').innerHTML = seconds;
}

function calculateCountDownCategoriesCard() {
  const now = dayjs();
  const diff = targetDate2.diff(now);

  if (diff <= 0) {
      console.log("The target time has passed!");
      return;
  }

  const diffDuration = dayjs.duration(diff);
  let days = Math.floor(diffDuration.asDays());
  let hours = diffDuration.hours();
  let minutes = diffDuration.minutes();
  let seconds = diffDuration.seconds();

  if (days < 10) {
    days = '0'+ days;
  }
  if (hours < 10) {
    hours = '0'+ hours;
  }
  if (minutes < 10) {
    minutes = '0'+ minutes;
  }
  if (seconds < 10) {
    seconds = '0'+ seconds;
  }

  document.querySelector('.days2').innerHTML = days;
  document.querySelector('.hrs2').innerHTML = hours;
  document.querySelector('.mins2').innerHTML = minutes;
  document.querySelector('.secs2').innerHTML = seconds;
}

setInterval(calculateCountDownFlashSales, 1000);
setInterval(calculateCountDownCategoriesCard, 1000);