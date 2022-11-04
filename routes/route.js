const express = require('express');
// const contacts = require('../models/contacts');
const router = express.Router();

const Contact = require('../models/contacts');


router.get('/contacts',(req,res)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
});

router.get('/contact/:id',(req,res)=>{
    const id = req.params.id;
    Contact.findById(id).then(result=>{
        res.status(200).json({
            contact:result
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    })
})

router.post('/contact',(req,res)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err,contact)=>{
        if(err){
            res.json({msg: "Failed to add contact"});
        }
        else{
            res.json({msg: "Added successfully"});
        }
    })
})

router.put('/contact/:id', (req, res) => {
    const contact = new Contact({
        _id: req.params.id,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    })
    Contact.updateOne({_id: req.params.id},contact).then(
        () => {
          res.status(201).json({
            msg: 'Contact updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        });
});

router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err); 
        }
        else{
            res.json(result);
        }
    })
});



module.exports = router;