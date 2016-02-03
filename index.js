var React = require('react');
var ReactDOMServer = require('react-dom/server');

var express = require('express');
var moment = require('moment');
var app = express();
var logger = require('morgan');
var fs = require('fs');

// Allow direct requiring of .jsx files
require('node-jsx').install({extension: '.jsx'});

// Should switch this out for proper Handlebars usage
function template(body, done) {
    'use strict';

    fs.readFile('./app/views/layout.hbs', 'utf8', function (err, layout) {
        if (err) {
            done(err);
        }

        done(null, layout.replace('{{{body}}}', body));
    });
}

app.use(logger('common'));

app.get('/', function (err, res) {
    'use strict';

    var App = require('./app/views/app.jsx');

    var time = moment();
    var posts = [
        {
            date: time
        },
        {
            date: time
        },
        {
            date: time
        }
    ];

    var body = ReactDOMServer.renderToString(
        React.createElement(App, {
            posts: posts
        })
    );

    template(body, function(err, html){
        if (err) throw err;
        res.send(html);
    });

});

// Static files
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3330);
