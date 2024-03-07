'use strict';

function updateClock() {
  const hrs = document.querySelector('.hrs');
  const mins = document.querySelector('.mins');
  const secs = document.querySelector('.secs');

  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourDeg = 360 * (hour / 12) + 360 * (minute / 60 / 12);
  const minDeg = (minute + second / 60) * 6;
  const secDeg = second * 6;

  hrs.style.transform = `rotate(${Math.ceil(hourDeg)}deg)`;
  mins.style.transform = `rotate(${Math.ceil(minDeg)}deg)`;
  secs.style.transform = `rotate(${Math.ceil(secDeg)}deg)`;
}

setInterval(updateClock, 0);
updateClock();
