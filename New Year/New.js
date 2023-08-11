
const din = document.getElementById('days');
const ghante = document.getElementById('hours');
const Min = document.getElementById('mins');
const Secd = document.getElementById('seconds');

const newyear = '1 jan 2024';
function start() {
    const newyeardate = new Date(newyear);
    const current = new Date();
    const sec = (newyeardate - current) / 1000;
    const days = Math.floor(sec / 3600 / 24);
    const hour = Math.floor(sec / 3600) % 24;
    const min = Math.floor(sec / 60) % 60;
    const second = Math.floor(sec) % 60;

    din.innerHTML = days;
    ghante.innerHTML = time(hour);
    Min.innerHTML = time(min);
    Secd.innerHTML = time(second);

}
function time(t) {
    if (t < 10)
        return `0${t}`;

    else
        return t;
}



setInterval(start, 1000);