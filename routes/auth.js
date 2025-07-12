import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/dashboard'
  }));

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.send("Error logging out");
    res.redirect('/');
  });
});

export default router;
