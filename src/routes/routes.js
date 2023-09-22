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

routes.put('/:id', async(req, res)=>{
    let id = req.headers.id
    let findEditItem = await billingCycleSchema.updateOne({_id:id}, {...req.body})
    let findById = await billingCycleSchema.findById(id)

    res.send(findById)
    
})

routes.delete('/:id', async (req,res)=>{
    let id = req.headers.id
    let findDeleteItem = await billingCycleSchema.findByIdAndDelete(id)
    res.send('Deletado!')
})

module.exports = routes