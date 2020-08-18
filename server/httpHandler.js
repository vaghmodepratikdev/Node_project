const HTTP_OK = 200;
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'
const path = require('path')
const ERROR_CODE = 400;
var fs = require('fs')
//var pathOfJsonDataFile = path.resolve(__dirname, '..')
const pathOfJsonDataFile='C:/clientServer/server'


function callme(request,response)
{
    console.log('i am here')    
}


function chacha(request,response)
{
    console.log('i am chacha')    
}

function listOfUsers(request, response) {
    //console.log('pratik')

    fs.readFile(pathOfJsonDataFile + "/" + "data.json", "utf8", function (err, data) {
      //  console.log(data)
        response.end(data)
    })
}

function UsersbyId(request, response) {
    fs.readFile(pathOfJsonDataFile + "/" + "data.json", "utf8", function (err, data) {
        var users = JSON.parse(data)
        var user = users["user" + request.params.id]
        response.end(JSON.stringify(user))
    })
}

function UsersbyDelete(request, response) {
    fs.readFile(pathOfJsonDataFile + "/" + "data.json", "utf8", function (err, data) {
        data = JSON.parse(data)
        delete data["user" + request.params.id]
        response.end(JSON.stringify(data))
    })
}

function UsersbyUpdate(request, response) {
    fs.readFile(pathOfJsonDataFile + "/" + "data.json", "utf8", function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + request.params.id];
        user["name"] = "Gurvi";
        user["password"] = "pass_123";
        users[request.params.id] = user[request.params.id]
        response.send(JSON.stringify(users))



    })
}



module.exports = {
 listOfUsers,
  UsersbyId,
 UsersbyDelete,
 UsersbyUpdate,
 callme,
 chacha
}