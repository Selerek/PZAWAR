const express = require('express')
const cors = require('cors')
const application = express()
const dataglobal = []

application.use(cors())
application.use(express.json())
application.post('/wyslanodane', (request, response) => {
    const data = request.body; 
    console.log('Received data:', data);
    dataglobal.push(data)
    response.send({
        message: "Data received successfully",
        receivedData: data,
    });
});
application.get('/wysylanie', (request, response) => {
    response.send(dataglobal)
})

application.get('/', (request, response) => response.send("<div><h1>hello world</h1></div>"))
application.get('/abc', (request, response) => {
    response.status(500)
    response.send("<div><h1>chong</h1></div>")
})
application.post('/abc', (request, response) => {
    response.status(500)
    response.send("<div><h1>abc</h1></div>")
})
application.put('/abc', (request, response) => {
    response.status(404)
    response.send("<div><h1>putter</h1></div>")
})
//sci/4c/abc
const sci_router = express.Router()
sci_router.get('/', (request, response) => {
    response.send("sci")
})
sci_router.get('/json', (request, response) => {
    const data = [{
        key1: "text",
        key2: 123,
    }]
    response.json(data)
})
application.use("/sci/4c/abc", sci_router)












application.listen(8000, () => console.log("server start") )
