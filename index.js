const express = require("express")

const app = express();
// console.log(app);

const PORT = process.env.PORT || 3000;
app.get("/",(req,res) => {
    return res.send("Hello form home page harsh");
})

app.get("/about",(req,res) => {
    return res.send("Hello from About page harsh");
})

app.listen(PORT , () => {
    console.log("Sarver chal raha hai harsh");
})