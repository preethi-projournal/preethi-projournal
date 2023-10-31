const users : [{"id": Number,"name": String}] = require("./data/users"); //Import users.json in data folder. 'require' will always load the JSON data as a JavaScript object
const express = require("express"); //Import the express module into the file
const app = express(); 
app.use(express.json()); //express.json() is a middleware function that parses JSON payload, if any, in the incoming API requests
const fs = require("fs");//To use the file system operation 

//http://localhost:3000/api/users
app.get('/api/users',(req,res)=>{ //Get all the user from the list
    res.send(users);
});

//http://localhost:3000/api/user/1
app.get('/api/user/:id',(req,res)=>{  //Get the specific user from the list
    
    fs.readFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", function(err, data) { //Read content of the JSON file (users.json)
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const u : [{"id": Number,"name": String}] = JSON.parse(data); 
        const g : number = u.length;
        var i : number = 0;
        while(i < g)
        {
            if(u[i]===undefined)
            res.status(404).send('404 Undefined'); //Send the error message if there are errors occured in if
            if(req.params.id==u[i].id){
                res.send(u[i]); //Check users.person.id is same as the id given in the url 
                return;

            } 

            i++;
        }
        res.status(404).send("NOT FOUND"); //Send the error message if there are errors occured during the while loop
    });
});

//http://localhost:3000/api/user
app.post('/api/user',(req,res)=>{ //Add new element to the file
	//The 'readFile' method to asynchronously reads the contents of the entire JSON file in memory. Syntax fs.readFile(path, options, callback);. The callback function takes two arguments. The first argument is the error object if an error occurs, and the second is the serialized JSON data
    fs.readFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", function(err, data) { 
        // Check for errors 
        if (err) throw err; 
        //Converts the JSON data into JavaScript
        const u : [{"id": number,"name": String}] = JSON.parse(data);
        const g : number =u.length;
        var i : number = 0;
        var value : number = 0;
        while(i<g){
            value = u[i].id;
            i++;
        }
        const user ={ 
            id:value+1,
            name : req.body.name
        };
        users.push(user);
        //The writeFile method is for an existing JSON file, the method will overwrite the data in the specified file. It will create a new file if the file does not exist. The syntax fs.writeFile(file, data, options, callback); 
        //JSON.stringify(data) used to convert JSON object into String
        fs.writeFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", JSON.stringify(users), err => { 
        
            // Checking for errors 
            if (err) throw err;
        });
        res.send(users);
    });
});

//http://localhost:3000/api/user/1
app.put('/api/user/:id',(req,res)=>{ //Update or change the value in the file using PUT http method   
    fs.readFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", function(err, data) { 
        const x : [{"id": Number,"name": String}] = users;
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const u : [{"id": number,"name": String}] = JSON.parse(data); 
        const g : number =u.length;
        var i : number =0;
        while(i<g)
        {
            if(u[i]===undefined)
            res.status(404).send('404 Undefined');
            var value : number = 0;
            if(req.params.id==u[i].id){
                value = i;
                const user ={ 
                    name: req.body.name
                };
                console.log(value);
                x[value].name = user.name;
                // users.push();
                fs.writeFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", JSON.stringify(x), err => { 
                    // Checking for errors 
                    if (err) throw err; 
                });
                res.send(users);
            };
                        
            i++;
        }
        res.status(404).send('404 NOT FOUND');
    });
});

//http://localhost:3000/api/user/1
app.delete('/api/user/:id',(req,res)=>{ //Delete the value from the file   
    fs.readFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", function(err, data) { 
        const x = users;
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const u : [{"id": number,"name": String}] = JSON.parse(data);
        const g : number =u.length;
        var i : number =0;
        var value : number =0;
        while(i<g)
        {
            if(u[i]==undefined){
                res.status(404).send('404 Undefined');
            };  
            if(req.params.id==u[i].id){
                x.splice(i,1);
                fs.writeFile("C:/Users/user/Desktop/Pro Journal/Files/Java script/data/users.json", JSON.stringify(x), err => { 
                    // Checking for errors 
                    if (err) throw res.status(404).send('404 NOT FOUND');
                }); 
                res.send(x);
            }  
            
            i++;
        }
        res.status(404).send('404 NOT FOUND');
    });
});

const port = process.env.PORT || 3000;
//The server.listen() method creates a listener on the specified port or path. The syantax is $ server.listen(port, hostname, backlog, callback);
app.listen(port,()=>console.log(`Listening to port ${port}...`));