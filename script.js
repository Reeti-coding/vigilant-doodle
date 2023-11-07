document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const birthdayMessage = document.getElementById('birthday-message');

    ball.addEventListener('animationend', function(event) {
        if (event.animationName === 'moveBall') {
            triggerConfetti();
            showBirthdayMessage();
        }
    });

    function showBirthdayMessage() {
        birthdayMessage.style.display = 'block';
    }
});

function triggerConfetti() {
    const confettiSettings = {
        particleCount: 100,
        spread: 70,
        startVelocity: 30,
        ticks: 60,
        origin: { y: 0.6 }
    };
    confetti(confettiSettings);
}
