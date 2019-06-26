'use strict'
require('mithril/test-utils/browserMock')(global)
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json()); //express doesn't automatically parse the body of objects, so we need this module.

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);
