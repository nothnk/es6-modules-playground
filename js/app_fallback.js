
console.log('hola fallback');
const message = {
    msg: { type: 'fire', text: 'Content message fallback' }
};


if (message) {
    const app = document.getElementById('app');
    app.innerHTML = `<span>${message.msg.text}</span>`;
}