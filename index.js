console.log("Hello from Shubham")
const express = require('express')
const res = require('express/lib/response')
const app = express()  
const PORT = 4000 || process.env.PORT

const format = require('date-format')


app.get('/',(req,res) =>{
res.status(200).send("<h1>hello world<h1>");
});

app.get("/api/v1/instagram", (req,res) => {
    const instaSocial = {
        usename : "shubham insta",
        folowers : 66,
        follows : 70,
        date : format.asString("dd[MM] - hh:mm:ss" , new Date())
    };

    res.status(200).json(instaSocial);
});
app.get("/api/v1/facebook", (req,res) => {
    const fscebookSocial = {
        usename : "shubham facebook",
        folowers : 88,
        follows : 80,
        date : format.asString("dd[MM] - hh:mm:ss" , new Date())
    };

    res.status(200).json(facebookSocial);
});
app.get("/api/v1/linkedin", (req,res) => {
    const linkedinSocial = {
        usename : "shubham linkedin",
        folowers : 88,
        follows : 80,
        date : format.asString("dd[MM] - hh:mm:ss" , new Date())
    };

    res.status(200).json(facebookSocial);
});

app.listen(PORT,() => {
    console.log('Server is running at ' + PORT);
});