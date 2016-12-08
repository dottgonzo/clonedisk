#!/usr/bin/env node

var child_process = require('child_process')

child_process.exec('sudo nw '+__dirname,function(err,stdout,stderr){

if (err) {
console.log(err)
}

})