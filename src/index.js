const { exec  }  = require('node:child_process');
const express = require('express');
const os = require('os');
const app = express();



// TODO: add an arg parser to accept a generic interface

function getIP() {
    // const ifconfig = exec("ifconfig eth0 | grep inet | awk '{ print $2 }'", (error, stdout, stderr) => {
    //     // TODO error handling
    //     console.log(`In ifconfig callback, IP addr: ${stdout}`);
    // }); 
    return os.networkInterfaces().eth0[0].address;
}

function getHostname() {
    // const hostname = exec("hostname", (error, stdout, stderr) =>  {
    //     console.log(`In hostname callback, hostname: ${stdout}`)
    // }); 
    return os.hostname;
}

// GET method route
app.get('/node-info', (req, res) => {
    console.log(getHostname());
    console.log(getIP());
    res.send('Hello from ' + getHostname() + ' @ ' +  getIP());
});

// Listen on the server
app.listen(8080, () => {
    console.log("listening on 8080");
});