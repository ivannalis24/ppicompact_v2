const express = require('express')
const path = require('path')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path:'./.env' })

const app = express()

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE
// })

const public = path.join(__dirname, './public')
app.use(express.static(public))

app.set('view engine', 'ejs')

// db.connect((error) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log('sukses lagi')
//     }
// })

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/about-us',(req,res) => {
    res.render('about-us')
})

app.get('/list',(req,res) => {
    res.render('list')
})



app.listen(3000,() =>{
    console.log('sukses gan')
})