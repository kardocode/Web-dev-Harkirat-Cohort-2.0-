const express = require('express');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const pool = new Pool({
    connectionString:process.env.NEON
});
app.use(express.json());


app.post('/signup',async (req,res)=>{
    const { username,password,email, } = req.body;
    await pool.query(`INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING id`,[username,password,email]);
    res.json({
        message: "SIGNUP DONE",
        id: response.rows[0].id
    })
});
app.post('/signin', async (req,res)=>{
    const {password , email } = req.body;
    const response = await pool.query(`SELECT * FROM users WHERE email = ($1) AND password = ($2)`,[email,password]);
    
    const userExist = response.rows[0];
    if(!userExist){
        res.status(404).json({
            message: " INCORRECT CREDENTIAL"
        });  
    }else{
        const token = jwt.sign(password,process.env.JWT_SECRET);
        res.status(200).json({
            message:"YOU ARE LOGGED - IN",
            token:token
        })
    }
});
app.post('/todo',async (req,res)=>{
    const { title , description } = req.body;
    await pool.query(`INSERT INTO todos (title,description,done) VALUES ($1,$2,$3)`,[title,description,true]);
    res.json({
        message:"DONE"
    })
})

app.get('/all-detail',async (req,res)=>{
    const usreId = req.userId;
    const detail = await pool.query(`
        SELECT u.id, u.username, t.title, t.description
        FROM users AS u
        JOIN todos AS t
            ON u.id = t.user_id
    `);
    res.json({detail})
})
app.listen(3000);