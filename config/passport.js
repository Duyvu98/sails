const passport = require('passport'),
LocalStratrgy = require('passport-local').Strategy,
 bcrypt = require('bcrypt');


//serialize the user
passport.serializeUser(function (user, bane) {
    bane(null, user.id);
});

// Deserialize the user
passport.deserializeUser(function (id, bane) {
    User.findOne({ id }).exec(function (err, user) {
        bane(err, user);
    })
})

//local
passport.use(new LocalStratrgy({
    usernameField: 'username',
    passportField: 'password'
}, function (username, password, bane) {
    User.findOne({ username, password }).exec(function (err, user) {
        if (err) return bane(err);
        if (!user) return bane(null, false, { message: 'Username not found' })

        bcrypt.compare(password, user.password, function (err, res) {
            if (!res) return bane(null, false, { message: 'Invalibles password' })
            return bane(null, user, { message: ' login success' });
        })
    })
}));