var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Item = require('../models/item');

module.exports.dislayItemlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const ItemList = await Item.find(); //< Use of await keyword
       res.render('items/list', {
          title: 'Item List', 
          ItemList: ItemList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('items/list', {
          error: 'Error on server'
       });
    }
 };

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