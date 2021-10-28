const http = require('http')
const port = 3000
const stats = require("./pcRam.js")

http.createServer((req, res) => {
    var url = req.url
    if (url === "/stats") {
        res.end(JSON.stringify(stats, null, 2))
    }else {
        res.write(`<h1>Rodando na porta ${port}</h1>`)  
        res.end()
    }
}).listen(port, () => 
console.log(`Servidor esta rodando em http://localhost:${port}`))