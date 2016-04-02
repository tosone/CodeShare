'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const PORT = 8800; //端口
// pm2 stop CodeShare
// git reset --hard origin/master
// git clean -f 
// git pull 
// git checkout master
// cnpm install
// pm2 start app.js -i 0 --name CodeShare
const server = http.createServer((request, response) => {
    let body = "";
    request.on('data', (chunk) => { body += chunk; });
    request.on('end', () => {
        let msg = eval("(" + body + ")");
        if (msg.token == "8541539655") {
            new Promise((resolve, reject) => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('pm2', ['stop', 'CodeShare']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('git', ['reset', '--hard', 'origin/master']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('git', ['clean', '-f']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('git', ['pull']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('git', ['checkout', 'master']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('cnpm', ['install']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    let spawn = child_process.spawn('pm2', ['start', 'app.js', '-i', '0', '--name', 'CodeShare']);
                    spawn.on('close', () => {
                        resolve(true);
                    });
                });
            }).catch(console.log);
        }
        response.end("OK");
    });
});

server.listen(PORT);

server.on('listening', () => {
    console.log("Server runing at http://127.0.0.1:" + PORT + ".");
});

server.on('error', () => {
    console.log("Server Listen on " + PORT + " error.");
});
