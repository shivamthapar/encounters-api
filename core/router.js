var restify = require('restify')
    , fs = require('fs')


var controllers = {}
    , controllers_path = process.cwd() + '/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1 && file.indexOf('.swp') == -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();

server
    .use(restify.fullResponse())
    .use(restify.bodyParser());

server.get('/', function (req, res, next) {
  res.send("hey");
  return next();
});

server.post("/users", controllers.users.createUser);
server.get("/users/:fbId", controllers.users.viewUser);

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})
