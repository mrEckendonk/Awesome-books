const time = document.querySelector('#time');
console.log(time);

// eslint-disable-next-line no-undef
const { DateTime } = luxon;

const now = DateTime.now();

DateTime.fromISO(now);

time.innerHTML = now.toFormat('yyyy/MM/dd HH:mm:ss');
