const users = require("./users"); 
const express = require("express");
const app = express();
app.use(express.json());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:false}));
// const users = [ 
//   {  
//     "id": "1",
//     "name": "John",   
//   }, 
//   { 
//     "id": "2",
//      "name": "Smith",  
//   }, 
// ];
const fs = require("fs"); 

app.get('/api/users',(req,res)=>{
    res.send(users);
});
// fs.readFile("users.json", function(err, data) { 
	
// 	// Check for errors 
// 	if (err) throw err; 

// 	// Converting to JSON 
// 	const u = JSON.parse(data); 
	
// 	console.log(u.person[0].name); // Print users 
// });

app.get('/api/users/:id',(req,res)=>{
    // console.log(req.params.id);
    fs.readFile("users.json", function(err, data) { 
	
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON 
        const u = JSON.parse(data); 

        var i=0;
    while(i<3)
    {
        if(u.person[i]===undefined)
        res.status(404).send('404 Undefined');
       if(req.params.id==u.person[i].id) res.send(u.person[i]);
       i++;
    }
    console.log('404 NOT fOUND');
    res.status(404).send('404 NOT FOUND');

        console.log(u.person[0].name); // Print users 
});
    // var i=0;
    // while(i<3)
    // {
    //     if(users[i]===undefined)
    //     res.status(404).send('404 Undefined');
    //    if(req.params.id==users[i].id) res.send(users[i]);
    //    i++;
    // }
    //const user=users.find(c=>c.id===parseInt(req.params.id));
    // console.log('404 NOT fOUND');
    // res.status(404).send('404 NOT FOUND');
    //if(!user) res.status(404).send('404 NOT FOUND');
    //res.send(user);

    //res.send(req.params.id);
});

app.post('/api/users',(req,res)=>{

    fs.readFile("users.json", function(err, data) { 
	
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON 
        const u = JSON.parse(data);
        console.log(u.person.length+1);
        const user={ 
            id:JSON.stringify(u.person.length+1),
            name: req.body.name
        };
        // console.log(users);
    users.person.push(user);
    fs.writeFile("users.json", JSON.stringify(users), err => { 
     
        // Checking for errors 
        if (err) throw err;  
       
        console.log("Done writing"); // Success 
    });
    res.send(user);
    });
    // const body = pm.response.json();
    // console.log(users.length+1);
    //const x = req.body.name;
//     console.log(req.body.name);
//     const user={ 
//         id:users.length+1,
//         name: req.body.name
//     };
// users.push(user);
// res.send(user);
// console.log(users.length+1);
});

app.put('/api/users/:id',(req,res)=>{
    
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
})


app.post('/api/users/:id',(req,res)=>{
    
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
})


app.delete('/api/user/:id',(req,res)=>{
    
    fs.readFile("users.json", function(err, data) { 
        const x=users;
        // Check for errors 
        if (err) throw err; 
        // const x = {
        //     "id": String,
        //     "name": String
        // };

        
        
        // Converting to JSON 
        const u = JSON.parse(data); 
        console.log(u);
        // for(var j=0; j<u.person[j];j++){
        //     x = u.person[j];
        // }
        
        //console.log(x);
        var i=0;
    while(i<3)
    {
        if(u.person[i]===undefined)
        res.status(404).send('404 Undefined');
       if(req.params.id==u.person[i].id) {
        // u.person[i]="";
        //const user = u.person[i];
        // const index = users.person.indexOf(user);
        // x.splice(index,1);
        // res.send(user);
        x.person[req.params.id-1] = 0;
        users.person.push();
fs.writeFile("users.json", JSON.stringify(users), err => { 
    console.log(users);
    // Checking for errors 
    if (err) throw err;  
    res.send(users);
    console.log("Done writing"); // Success 
});
       }//res.send(u.person[i]);
       i++;
    }
    // console.log('404 NOT fOUND');
    // res.status(404).send('404 NOT FOUND');

        console.log(u.person[0].name); // Print users 
});
})

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening to port ${port}...`));

 
