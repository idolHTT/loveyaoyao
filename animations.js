function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('heartsContainer').appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 300);
