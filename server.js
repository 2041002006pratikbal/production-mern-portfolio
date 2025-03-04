const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
//dotenv configuration

dotenv.config() //should be immediate after import statements otherwise enviromental variables won't work 

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())


//static files access
app.use(express.static(path.join(__dirname, './client/build')))

//routes
/*
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to node server</h1>');
})
*/
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//port
const PORT=process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT} `);
})