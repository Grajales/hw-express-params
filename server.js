const express = require("express");
const app = express();

//Part 1
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

//Part 2
// http://localhost:3000/tip/total/tipPercentage/?total=110&&tipPercentage=5
    app.get('/tip/total/tipPercentage', (req, res) => {
    let total = req.query.total
    let percent = req.query.tipPercentage
    let tipPay = total*percent/100;
    res.send(`Please pay ${tipPay}`);
    // res.send(`Please pay ${total} times ${percent}`);
})
//Part 3


app.listen(3000, () => {
    console.log("Server is listening!!!")
});