var express=require('express'); // importing expres module
var app =express();





app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/home.html');
});






app.listen(9000, function () {
    console.log('Server is running on port 9000');
});


