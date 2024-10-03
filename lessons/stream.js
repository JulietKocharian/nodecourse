// // stream !== thread
// // there are 4 types of streams
// // 1.) Readable
// // 2.) Writable
// // 3.) Duplex (readable + writable)
// // 4.) Transform - its like a duplex, but you can also change data


const fs = require('fs');
const path = require('path');

// // { encoding: 'utf-8' },

// // fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
// //     if (err) {
// //         console.log('Error: ', err);
// //         return;
// //     } else {
// //         console.log('Data: ', data)
// //     }
// // });


// // const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), { highWaterMark: 4 * 1024 });

// // stream.on('data', (chunk) => {
// //     console.log('chunk: ', chunk);
// // });

// // stream.on('open', () => console.log('started to read the file'));
// // stream.on('end', () => console.log('ended to read file'));
// // stream.on('error', (err) => console.log('Error: ', err));


// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test.txt'));

// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }


// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error', (err) => console.log(err));

const http = require('http');

http.createServer((req, res) => {
    // request is readable stream
    // responce is writable stream
    // res.on('')
    // const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));
    // stream.on('data', (chunk) => res.write(chunk));
    // stream.on('end', (chunk) => res.end(chunk));

    // the same
    // stream.pipe(res);
})
