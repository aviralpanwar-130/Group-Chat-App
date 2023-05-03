const express = require('express');

const router = express.Router();

router.use('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('user',document.getElementById('user').value)"
             action="/chat" method="POST">
            <input id="user" type="text" name="title" placeholder="Username">
            <button>Submit</button></form>`);
});

module.exports = router;