const container = document.querySelector('.container');
const title = document.querySelector('.title');
const walk = 70;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  title.style.setProperty('--text-shadow-x', `${xWalk}px`);
  title.style.setProperty('--text-shadow-y', `${yWalk}px`);
}

function brightness(e) {
  const xWalk = e.pageX - window.innerWidth / 2;
  const yWalk = e.pageY - window.innerHeight / 2;

  title.style.setProperty('--text-brightness-x', `${xWalk}px`);
  title.style.setProperty('--text-brightness-y', `${yWalk}px`);
}

title.addEventListener('mousemove', brightness);
container.addEventListener('mousemove', shadow);
