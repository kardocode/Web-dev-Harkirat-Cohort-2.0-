const express = require('express');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const z = require('zod');

const pool = new Pool({
    connectionString:process.env.NEON
});
app.use(express.json());

const signUpSchema = z.object({
    username: z.string().min(3),
    password : z.string().min(6),
    email : z.email()
})

app.post('/signup',async (req,res)=>{

    const { data, success,error } = signUpSchema.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            message:"INCORRECT INPUTS",error: JSON.parse(error)
        })
    }

    const username = data.username;
    const password = data.password;
    const email = data.email;
    const hashedPassword = await bcrypt.hash(password,10);

    // never store the password in plane form => hash the password and add some salt
    await pool.query(`INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING id`,[username,hashedPassword,email]);
    res.json({
        message: "SIGNUP DONE"
    })
});
app.post('/signin', async (req,res)=>{
    const {password , email } = req.body;

    const response = await pool.query(`SELECT * FROM users WHERE email = ($1)`,[email]);
    
    const userExist = response.rows[0];

    
    if(!userExist){
        res.status(404).json({
            message: " INCORRECT CREDENTIAL"
        });  
    }else{
        const correctPassword = bcrypt.compare(password,userExist.password);
        if(correctPassword){
            const token = jwt.sign(password,process.env.JWT_SECRET);
            res.status(200).json({
                message:"YOU ARE LOGGED - IN",
                token:token
            })
        }else{
            res.json({
                message:"Incorrect Credentials"
            })
        }
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