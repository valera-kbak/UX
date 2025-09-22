// 7. Дополнительные анимационные эффекты
function createParticleEffect(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = 
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #FFD700;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    ;
    document.body.appendChild(particle);
    
    // Анимация частицы
    const animation = particle.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    });
    
    animation.onfinish = () => particle.remove();
}

// Добавляем эффекты частиц при клике
document.addEventListener('click', function(e) {
    createParticleEffect(e.clientX, e.clientY);
});

// Анимация изменения здоровья
function updateHealth(hearts) {
    const heartElements = document.querySelectorAll('.heart');
    heartElements.forEach((heart, index) => {
        if (index < hearts) {
            heart.classList.remove('lost');
        } else {
            heart.classList.add('lost');
        }
    });
}
