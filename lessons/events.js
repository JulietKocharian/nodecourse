const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, three) => {
    console.log('data: ', data);
    console.log('second: ', second);
});


const MESSAGE = process.env.MESSAGE;

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 123, 'you dont have any messages!');
}



