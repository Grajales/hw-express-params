const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send('homepage')
})
//Thiago's solution
//Part1 http://localhost:3000/greeting
app.get('/greeting', (req,res)=>{
    res.send('Hello Stranger')
})
//params http://localhost:3000/greeting/Liliana
//req.params.name
app.get('/greeting/:name', (req,res)=>{
    let name1 = req.params.name
    // res.send('Whats up '+ req.params.name)
    res.send('Whats up '+ name1)
})
//part2 type http://localhost:3000/tip1/100/20
app.get('/tip1/:total1/:tipPercentage1', (req, res) => {
    let total1 = parseInt(req.params.total1)
    let percent1 = parseInt(req.params.tipPercentage1)
    let tipPay1 = total1*percent1/100;
    res.send(`Please pay ${tipPay1}`);
 })
 //part3
 //http://localhost:3000/magic1/blahblahblah
 app.get('/magic1/:question1', (req, res) => {
    const answers =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const max1=answers.length
    let randomIndex=Math.floor(Math.random() * Math.floor(max));
   res.send(`${req.params.question1} ? === ${answers[randomIndex]}`);
    
 })


///////////////////////////////
//Below is Liliana's solution using query
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
 })
//Part 3

//http://localhost:3000/magic/question/?question=Will%20I%20Be%20A%20Millionaire
let response =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
let max = response.length
app.get('/magic/question', (req, res) => {
    let question = req.query.question
    if(question=="Will I Be A Millionaire"){
    selectNum= Math.floor(Math.random() * Math.floor(max));
   res.send(`${question} ? response: ${response[selectNum]}`);
    }
 })
app.listen(3000, () => {
    console.log("Server is listening!!!")
});