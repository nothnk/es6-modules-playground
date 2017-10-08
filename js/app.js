import Message from './modules/Message.js';

console.log('hola');
const message = new Message({
    msg: { type: 'fire', text: 'Content message' }
});

console.log(message);

if (message) {
    const app = document.getElementById('app');
    app.innerHTML = message.getMessage();
}