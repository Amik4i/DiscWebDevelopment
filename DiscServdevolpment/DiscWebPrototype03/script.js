// JavaScript to handle button clicks and show additional information

document.addEventListener('DOMContentLoaded', () => {
    const topic1Button = document.getElementById('topic1');
    const topic2Button = document.getElementById('topic2');
    const additionalInfo = document.getElementById('additional-info');

    topic1Button.addEventListener('click', () => {
        additionalInfo.classList.remove('hidden');
        additionalInfo.innerHTML = `<h2>Extra Informatie voor Topic 1</h2><p>Dit is de extra informatie die tevoorschijn komt wanneer je op Topic 1 klikt.</p>`;
    });

    topic2Button.addEventListener('click', () => {
        additionalInfo.classList.remove('hidden');
        additionalInfo.innerHTML = `<h2>Extra Informatie voor Topic 2</h2><p>Dit is de extra informatie die tevoorschijn komt wanneer je op Topic 2 klikt.</p>`;
    });
});
