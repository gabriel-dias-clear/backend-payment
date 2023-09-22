const express = require('express')

const routes = express.Router()

const billingCycleSchema = require('./../api/billingCycle/billingCycle')


routes.get('/', async (req, res)=>{
    let findAll = await billingCycleSchema.find({})
    res.send(findAll)
    
})

routes.post('/', async (req, res)=>{
     let saveBill = await billingCycleSchema.create({
        ...req.body
    }) 

    res.send(saveBill)
})

module.exports = routes