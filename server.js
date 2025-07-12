import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './config/passport.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send(`<h2>Google Auth Project</h2>
            <a href="/auth/google">Login with Google</a>`);
});

app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`<h2>Welcome, ${req.user.displayName}</h2><a href="/auth/logout">Logout</a>`);
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
