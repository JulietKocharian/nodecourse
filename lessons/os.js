// const os = require('os');
// const cluster = require('cluster');

// // console.log('Operation system: ', os.platform());
// // console.log('architecture: ', os.arch());
// // console.log('CPU-s: ', os.cpus().length);
// const cpus = os.cpus();

// // is main running cluster or no
// if (cluster.isMaster) {
//     for (let i = 0; i < cpus.length - 2; i++) {
//         cluster.fork();
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`worker with ${worker.process.pid} is killed`);
//         if(code === )
//         cluster.fork();
//     });
// } else {
//     console.log(`worker with proccess ID ${process.pid} is running`);

//     setInterval(() => {
//         console.log(`worker with proccess ID ${process.pid} yet is running`);
//     }, [5000])
// };