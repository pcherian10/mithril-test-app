
const passport = require('passport');
const mongoose = require('mongoose')
const User = mongoose.model('users'); // one argument to retreive, two to load.


module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
    })
    );
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/landing');
        }
    );

    app.get('/api/users', async (req, res) => {
        const users = await User.find()
        res.json(users)
     });
 

    app.get('/api/current_user', (req, res) => {
       res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

}