import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const bodyEl = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

start.addEventListener('click', onclickStart);
let intervalId = NaN;
function onclickStart() {
  intervalId = setInterval(bodyStyle, 1000, 1000);
  start.disabled = true;
}
function bodyStyle() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.backgroundColor = colors[randomIndex];
}
stop.addEventListener('click', onClickSrop);
function onClickSrop() {
  clearInterval(intervalId);
  start.disabled = false;
}
