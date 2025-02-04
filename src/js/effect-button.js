function moveBg(e) {
    const rect = e.target.getBoundingClientRect();
    e.target.style.setProperty('--x', (e.clientX - rect.x) / rect.width * 100);
    e.target.style.setProperty('--y', (e.clientX - rect.y) / rect.width * 100);
}

document.querySelector("button").addEventListener('pointermove', moveBg)