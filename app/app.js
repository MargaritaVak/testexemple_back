const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const bearerToken = require('express-bearer-token');
const cookieSession = require("cookie-session");

const userRouter = require('./routers/user.router.js');
const postRouter = require('./routers/post.router.js');

app.use(
    cookieSession({
        name: "fotostudio-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
const corsOptions = {
    origin: process.env.URL_client,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use(bearerToken());

app.use(userRouter);
app.use(postRouter);

module.exports = app;

