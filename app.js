const express =require('express');
const app =express();

require("./conn/conn");
require("./models/user");
require("./models/post");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));



const customMiddleware=(req,res,next)=>{
    console.log("this is middle ware");
    next();
}
// app.use(customMiddleware);

app.get("/",(req,res)=>{
res.send("this is home page");
console.log("this is home page")
});

app.get("/about",customMiddleware,(req,res)=>{
    res.send("this is about page");
    console.log("this is about page")
    });

app.listen(5000,()=>{
    console.log("server is listining");
})

