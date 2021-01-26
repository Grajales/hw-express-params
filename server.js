const express = require("express");
const app = express();
//in the object 
const greeting =["Hello stranger",
{ name : "john"    },
{ name : "pierre"  }  ] 
// To get the name one must type on the url:
// http://localhost:3000/greeting/

app.get('/greeting', (req,res) =>{
    res.send(greeting[0])
})

// To get the name one must type on the url:
// http://localhost:3000/greeting/:name/?name=Jimmy-boy

app.get('/greeting/:name', (req, res) => {
    let name = req.query.name
    res.send(`How are you doing ${name}`);
})

app.listen(3000, () => {
    console.log("Server is listening!!!")
});