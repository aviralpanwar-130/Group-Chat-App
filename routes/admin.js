const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.use('/chat',(req,res,next)=>{
    //console.log(req.body.title);
    fs.readFile("msgs.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data!=undefined)
        res.write(`<body>${data}</body>`);
        res.write(`<form onsubmit="document.getElementById('username').value=localStorage.getItem('user')"
             action="/chat-store" method="POST">
            <input type="text" name="messages" placeholder="write msgs">
            <input type="hidden" name="username" id="username">
            <button>Send</button></form>`);
        res.end();
        });
});

router.post('/chat-store',(req,res,next)=>{
    //console.log(req.body);
    let message = `${req.body.username}: ${req.body.messages}`;
    fs.writeFile('msgs.txt',message,{flag:'a'},(err)=>{
        if(err)
        console.log(`Error in fs.write=> ${err}`);
    })
    res.redirect('/chat');
});

module.exports = router;