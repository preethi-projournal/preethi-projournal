//In this API we did the CURD operations using GET, POST, PUT, DELETE with the help of Express
//node version: v18.18.0, npm version : 9.8.1, Windows 10 64GB
//Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your 
    //application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.
//Before running the sampleApi.js file, try to run the command $npm install. To install the dependencies in package.json file
//To run the sampleApi.js, use the command $ node sampleApi.js

package.json:

{
  "name": "java-script",
  "version": "1.0.0",
  "description": "sample package",
  "main": "sample.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [
    "sample"
  ],
  "author": "me",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
  }
}

user.json:

{
    "person" : [{"id": "1",
            "name": "John"   
          }, 
          { 
            "id": "2",
             "name": "Smith"  
          } 
        ]
}

sampleApi.js:

//node version: v18.18.0, npm version : 9.8.1, Windows 10 64GB
const users = require("./users"); //Import users.json. 'require' will always load the JSON data as a JavaScript object
const express = require("express"); //Import the express module into the file
const app = express(); 
app.use(express.json()); //express.json() is a middleware function that parses JSON payload, if any, in the incoming API requests

const fs = require("fs");//To use the file system operation 
const { x } = require("joi");

//http://localhost:3000/api/users
app.get('/api/users',(req,res)=>{ //Get all the user from the list
    res.send(users);
});

//http://localhost:3000/api/users/1
app.get('/api/users/:id',(req,res)=>{  //Get the specific user from the list
    
    fs.readFile("users.json", function(err, data) { //Read content of the JSON file (users.json)
	
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON 
        const u = JSON.parse(data); 

        var i=0;
    while(i<3)
    {
        if(u.person[i]===undefined)
        res.status(404).send('404 Undefined'); //Send the error message if there are errors occured in if
       if(req.params.id==u.person[i].id) res.send(u.person[i]); //Check users.person.id is same as the id given in the url 
       i++;
    }
    console.log('404 NOT fOUND');
    res.status(404).send('404 NOT FOUND'); //Send the error message if there are errors occured during the while loop

        console.log(u.person[0].name); // Print users 
});
   
});

//http://localhost:3000/api/users
app.post('/api/users',(req,res)=>{ //Add new element to the file
	
	//The 'readFile' method to asynchronously reads the contents of the entire JSON file in memory. Syntax fs.readFile(path, options, callback);. The callback function takes two arguments. The first argument is the error object if an error occurs, and the second is the serialized JSON data
    fs.readFile("users.json", function(err, data) { 
	
        // Check for errors 
        if (err) throw err; 
    
        //Converts the JSON data into JavaScript
        const u = JSON.parse(data); 
        console.log(u.person.length+1);
        const user={ 
            id:JSON.stringify(u.person.length+1),
            name: req.body.name
        };
        
    users.person.push(user);
	
	//The writeFile method is for an existing JSON file, the method will overwrite the data in the specified file. It will create a new file if the file does not exist. The syntax fs.writeFile(file, data, options, callback); 
	//JSON.stringify(data) used to convert JSON object into String
    fs.writeFile("users.json", JSON.stringify(users), err => { 
     
        // Checking for errors 
        if (err) throw err;  
       
        console.log("Done writing"); // Success Message
    });
    res.send(user);
    });
});

 //http://localhost:3000/api/users/1
app.put('/api/users/:id',(req,res)=>{ //Update or change the value in the file using PUT http method
    
    fs.readFile("users.json", function(err, data) { 
        const x = users;
	
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON 
        const u = JSON.parse(data); 

        var i=0;
    while(i<3)
    {
        if(u.person[i]===undefined)
        res.status(404).send('404 Undefined');
       if(req.params.id==u.person[i].id){
         const user={ 
        name: req.body.name
    };
    x.person[req.params.id-1].name = user.name;
    
users.person.push();
fs.writeFile("users.json", JSON.stringify(users), err => { 
    console.log(users);
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
});
res.send(user);};
       i++;
    }
     
});
});

//http://localhost:3000/api/users/1
app.post('/api/users/:id',(req,res)=>{ //Update or change the value in the file using POST http method
    
    fs.readFile("users.json", function(err, data) { 
        const x = users;
	
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON 
        const u = JSON.parse(data); 

        var i=0;
    while(i<3)
    {
        if(u.person[i]===undefined)
        res.status(404).send('404 Undefined');
       if(req.params.id==u.person[i].id){
         const user={ 
        name: req.body.name
    };
    x.person[req.params.id-1].name = user.name;
    //console.log(x);
users.person.push();
fs.writeFile("users.json", JSON.stringify(users), err => { 
    console.log(users);
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
});
res.send(user);};
       i++;
    }
    //console.log('404 NOT fOUND');
    //res.status(404).send('404 NOT FOUND');

        //console.log(u.person[0].name); // Print users 
});
});

//http://localhost:3000/api/users/1
app.delete('/api/users/:id',(req,res)=>{ //Delete the value from the file
    
    fs.readFile("users.json", function(err, data) { 
        const x=users;
        // Check for errors 
        if (err) throw err; 
            
        // Converting to JSON 
        const u = JSON.parse(data); 
        console.log(u.person.length);
        const g=u.person.length;
        var i=0;
    while(i<g)
    {
        console.log(g);
        console.log(u.person[i]);
        if(u.person[i]==undefined){
            console.log(u.person[i]);
        res.status(404).send('404 Undefined');};
       if(req.params.id==u.person[i].id) {
        
        x.person[req.params.id-1] = '0';
        console.log(x);
        //users.person.push(x.person);      
       }
       i++;
       //const y = JSON.stringify(users);
       //res.send(users);
    }
    users.person.push();
    fs.writeFile("users.json", JSON.stringify(users.person), err => { 
     console.log(users);
     
     // Checking for errors 
     if (err) throw err;  
     //res.send(users);
     console.log("Done writing"); // Success 
 }); 
     console.log('404 NOT fOUND');
     res.status(404).send('404 NOT FOUND');

        //console.log(u.person[0].name); // Print users 
});

});

const port = process.env.PORT || 3000;

//The server.listen() method creates a listener on the specified port or path. The syantax is $ server.listen(port, hostname, backlog, callback);
app.listen(port,()=>console.log(`Listening to port ${port}...`));

