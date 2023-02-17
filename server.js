const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.end("Bienvenidos al servidor backend")
})

//Configurar server basico
app.listen(5000, ()=>{
    console.log("Server in port 5000");
})