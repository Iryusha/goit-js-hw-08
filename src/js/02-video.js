import throttle from 'lodash.throttle';

const frame = document.querySelector('iframe')

const player = new Vimeo.Player(frame);

player.on('timeupdate', throttle(onTimeupdate, 1000));

const STORAGE_KEY = 'videoplayer-current-time';

function onTimeupdate(time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;

    default:
      break;
  }
});

