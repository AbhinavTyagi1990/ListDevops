const express = require('express');
const app = express();


app.use('/posts',(req, res, next)=>{
    const posts = [
        {
            id: '2165767',
            title: 'First',
            content: 'This is server'
        },
        {
            id: '21hjgsadh7',
            title: 'Second',
            content: 'This is server two'
        }
    ]
    res.status(200).json({
        message: 'Hello',
        posts: posts

    });
});

module.exports = app;