import path from "path"
import express from "express"
import webpack from "webpack"
import webpackDevMiddleware from "webpack-dev-middleware"
import config from "./webpack.config.js"
import webpackHotMiddleware from "webpack-hot-middleware"

const app = express(),
      DIST_DIR = path.join(__dirname, "dist"),
      PORT     = 3000,
      compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

var router = require('express').Router();

 router.get('/', function(req, res) {
   res.json({
     'error': false,
     message: 'hooray! welcome to our api!'
   });
 })

 router.get("/devices", (req, res) =>{
   res.json(require('./tests/fakedevices.json'));
 })

app.use('/api', router)

app.get("*", (req, res, next) => {
    const filename = path.join(DIST_DIR, "index.html")

    compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
        return next(err)
    }
    res.set('content-type', 'text/html');
    res.send(result)
    res.end()
    })
})

app.listen(PORT);
