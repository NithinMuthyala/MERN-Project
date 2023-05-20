const express = require('express')
const mongoose = require('mongoose')
const data = require('./modal')
const cors = require('cors')
const app = express()
const info = require('./db')

// console.log(Person)
// console.log(data)
app.use(express.json())

app.use(cors({
    origin:"*"
}))

mongoose.connect('mongodb+srv://muthyal1996:Nithin123@nithin.you9vdw.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Db Connected')
}).catch((err) => {
    console.log(err)
})
  
    

app.listen(4005,() => {
    console.log('Server is Runnning at 4005')
})

app.post('/add', async (req,res) => {
    const {todo} = req.body
    try {
        const newData = new data({
            name:todo
        }) 
       await newData.save()
        return  res.json( await data.find())
        // 
    }
    catch(err){
        console.log(err)
    }
})

app.post('/getDetails', async (req,res) => {

    const details = req.body

    console.log(details)
    const {fname,lname,fullName} = details 
    // console.log(Person.info)
    try{
        const newInfo = new info({
            fname:fname,
            lname:lname,
            fullName:fullName
        })
        await newInfo.save()
        return res.send(await info.find())
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getUsers',async (req,res) => {
    try{
        return res.json(await info.find())
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getTask', async (req,res) => {
    // res.send('Hello Buddy')
    try {
        return  res.json( await data.find())
    }
    catch(err){
        console.log(err)
    }
})

app.delete('/delete/:id', async (req,res) => {
    try{
        await data.findByIdAndDelete(req.params.id)
        return  res.json( await data.find())
    }
    catch(err){
        console.log(err)
    }
})