
const express = require('express')
const router = express.Router()
const data = require('./Jsondata.json')
 
// here base route is /api/people which is used in every router
// now I will use app.use('api/people', routes)
router.get('/', (req, res)=>{
    res.status(201).json({success:true, data:data})
})

router.post('/', (req, res)=>{
    const {name} = req.body
    

    if(!name){
        res.status(404).json({success:false, msg:'please provide name value'})
    } 
        res.status(201).send({success:true, data:name})
    
})


router.put('/', (req, res)=>{
    const {id, name}= req.body;

    if(!name){
        res.status(404).json({success:false, msg:'please provide name'});

    }

    const people = {id,name};
    res.status(201).json({success:true,data:[...data, people]})
})

router.delete('/:id', (req, res)=>{
    const {id, name}= req.params;
    if(!id){
        res.status(404).json({success:false, msg:`people with id ${id} does not exist`})
    }
    const newPeople = data.filter((people)=>people.id!==Number(id));
    res.status(201).json({success:true, data:newPeople})
})


module.exports = router
