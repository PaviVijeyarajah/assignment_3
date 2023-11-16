
let express = require('express');
let router = express.Router();
//keeps important parts of the routes in the controller for security purposes
module.exports.displayHomePage = (req, res, next)=> {
    res.render('index', {  title: 'Home'   });
}

module.exports.displayAboutPage = (req, res, next)=> {
    res.render('about', {  title: 'About'   });
}

module.exports.displayProjectPage = (req, res, next)=> {
    res.render('project', { title: 'Project'  });
  }
module.exports.displayContactPage = (req, res, next)=> {
    res.render('contact', { title: 'Contact'  });
  }
  