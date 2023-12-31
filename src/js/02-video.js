import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIME_PLAY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(e => {
  localStorage.setItem(STORAGE_TIME_PLAY, e.seconds)
}, 1000)); 

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_PLAY) || 0)
console.log(`Ви зупинились на перегляді ${Math. round(localStorage.getItem(STORAGE_TIME_PLAY))} секунди фільму`);
