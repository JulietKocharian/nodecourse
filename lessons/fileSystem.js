const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), { recursive: true });

console.log('Start');

console.log(__dirname);


// fs.mkdir(path.resolve(__dirname, 'dir6'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('Folder created');
//     }
// });


console.log('End');

// fs.rmdir(path.resolve(__dirname, 'dir6'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('deleted folder named dir');
//     }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'tadaamammaamammaammam', (err) => {
//     if (err) {
//         console.log(err);
//         throw (err);
//     }
//     console.log('file have written');


//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'yepp', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         console.log('file have updated');

//     });

// });


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve();
    }))
};

const updateFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }))
};

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            reject(err.message);
        }
        resolve(data);
    }))
};

const rmFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }))
};


// writeFileAsync(path.resolve(__dirname, 'example.txt'), 'byebyee');

// updateFileAsync(path.resolve(__dirname, 'example.txt'), 'changedchangedd');

// logic all together
// writeFileAsync(path.resolve(__dirname, 'new.txt'), 'hi thereee')
//     .then(() => updateFileAsync(path.resolve(__dirname, 'nex.txt'), 'yepyep'))
//     .then(() => updateFileAsync(path.resolve(__dirname, 'nex.txt'), 'ohnonono'))
//     .then(() => updateFileAsync(path.resolve(__dirname, 'nex.txt'), 'tadaaaaa'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'nex.txt')))
//     .then((data) => console.log('data from the nex.txt: ', data))
//     .catch((err) => console.log('Error: ', err));

// rmFileAsync(path.resolve(__dirname, 'just.txt'));


const text = process.env.TEXT || '';


writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Count of the words in text.txt ${count}`))
    .then(() => rmFileAsync(path.resolve(__dirname, 'test.txt')))
    .catch((err) => console.log(err));
