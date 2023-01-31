const express = require("express")
const app = express()

app.use(express.static(__dirname + '/public'));
app.get("/", (_,res) => {
    res.send('index.html')
})
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
  })
  server.on('error', error => console.log(`Error en servidor: ${error}`))