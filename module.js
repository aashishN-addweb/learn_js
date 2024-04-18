// ===== NPM Modules 

// const color = require('cli-color');

// (function (exports, require, module, __direname, __filename) {
//     console.log(color.red('Test Color'));
// })()

// console.log(color.green('Hello node'));


// ===== Local Module Import
// const auth = require('./auth');

// auth.register('Aashish')
// auth.login('Aashish', 'password')




// ===== Core modules (Reference : https://nodejs.org/api/path.html)

const path = require('path');

// // PATH module -> filename
// console.log('Folder name: ', path.dirname(__filename));

// // PATH module -> extension
// console.log('Extension name: ', path.extname(__filename));

// // PATH module -> parse
// console.log('Parse: ', path.parse(__filename));

// // PATH module -> join
// console.log('Join: ', path.join(__dirname, 'order', 'app.js'));




// File System

const fs = require('fs');

// File System -> Make a directory 
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if (err) {
//         console.log('Something went wrong: ', err);
//         return;
//     }
// });

// File System -> Create a file
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello Node', (err) => {
//     if (err) {
//         console.log('Something went wrong: ', err);
//         return;
//     }

//     // Append Data in existing data in file
//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), '\nMore Data', (err) => {
//         if (err) {
//             console.log('Something went wrong: ', err);
//             return;
//         }
//     });
// });

// File System -> Read a File
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Something went wrong: ', err);
//         return;
//     }

//     // const content = Buffer.from(data);
//     // console.log(content.toString());

//     console.log(data);
// });



// OS 

const os = require('os');

// console.log('OS Type: ', os.type());

// console.log('OS Platform: ', os.platform());

// console.log('CPU Arch: ', os.arch());

// console.log('Free Memory: ', os.freemem());

// console.log('Total Memory: ', os.totalmem());

// console.log('System Up time: ', os.uptime());




// Event Module

const Emitter = require('events');

// const myEmitter = new Emitter();

// myEmitter.on('someone', (data) => {
//     console.log(data);
// });

// myEmitter.emit('someone', {
//     name : 'Aashish'
// });


// class Auth extends Emitter {

//     register(username) {
//         console.log('Registered Successfully...');;
//         this.emit('registered', username);
//     }

// }

// const auth = new Auth();

// // NOTE : we can use same event multiple times listners 
// // Verify email Event 
// auth.on('registered', (data) => {
//     console.log('Email sent to ' + data);
// });
// // Welcome email
// auth.on('registered', (data) => {
//     console.log('Welcome email');
// });

// auth.register('Aashish Nayak');




