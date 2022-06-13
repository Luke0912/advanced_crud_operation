const connect = require('./configs/db')

const router = require("./index")

const express = require("express")

app.use(express.json())

app.use(cors())

app.use(router())

app.listen(5000, async ()=>{
    try {
       await connect()
        console.log("lISTENING TO PORT 5000")
    } catch (error) {
        console.log("error:",error)
    }
})

