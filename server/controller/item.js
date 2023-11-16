var express = require('express');
var router = express.Router();
let Item = require('../models/item');

//keeps important parts of the routes in the controller for security purposes
module.exports.dislayItemlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const ItemList = await Item.find(); //< Use of await keyword
       res.render('items/list', {
          title: 'Item List', 
          ItemList: ItemList
       });
    }catch(err){
       console.error(err);
       res.render('items/list', {
          error: 'Error on server'
       });
    }
 };
//get displays the add page
 module.exports.displayAddPage = async (req,res,next)=>{
    try{
        res.render('items/add',
        {
            title:'Add Items'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('items/list',
        {
            error: 'Error on the server'
        });
    }
};
//post processes the add page
module.exports.processAddPage = async (req,res,next)=>{
    try{
        let newItem = Item({
        "item":req.body.item,
        "stock":req.body.stock,
        "price":req.body.price,
        "model":req.body.model,
        "condition":req.body.condition,
        "description":req.body.description
        });
        Item.create(newItem).then(() =>{
            res.redirect('/itemlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('items/list',
        {
            error: 'Error on the server'
        });
    }
};
//get displays edit page
module.exports.displayEditPage = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const itemToEdit = await Item.findById(id);
    res.render('items/edit',
    {
        title:'Edit Item',
        Item:itemToEdit
    })
}
catch(error){
    console.error(err);
    res.render('items/list',
    {
        error: 'Error on the server'
    });
}
}
//post processes edit page
module.exports.processEditPage = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedItem = Item({
            "_id":id,
            "item":req.body.item,
            "stock":req.body.stock,
            "price":req.body.price,
            "model":req.body.model,
            "condition":req.body.condition,
            "description":req.body.description
        });
        Item.findByIdAndUpdate(id,updatedItem).then(()=>{
            res.redirect('/itemlist')
        });
    }
    catch(error){
        console.error(err);
        res.render('items/list',
        {
            error: 'Error on the server'
        });
    }
}
//performs delete in list page
module.exports.performDelete = (req,res,next)=>{
    try{
        let id = req.params.id;
        Item.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/itemlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('items/list',
        {
            error: 'Error on the server'
        });
    }
}