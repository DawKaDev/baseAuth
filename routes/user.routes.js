const express = require('express');
const passport = require('passport');
const router = express.Router();
const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/no-permision');
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  res.render('logged', {user: req.user.displayName, image: req.user.photos[0].value});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

module.exports = router;