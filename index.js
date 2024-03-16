//1 import json-server
const jsonServer=require('json-server')

//2 Create a Server Application
const restServer=jsonServer.create()

//3 Setup Path For db.json
const router=jsonServer.router('db.json')

//4 Return a middle instance used by json-server
const middleware=jsonServer.defaults()

//5 Setup port For db.json
const port=3001

//6 use in server
restServer.use(middleware)
restServer.use(router)

//7 to run the server
restServer.listen(port,()=>{
    console.log("rest server listening on port"+port);
})
