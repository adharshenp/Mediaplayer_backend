//import json server library in index.js file
 const jsonserver=require('json-server')

 // create server using json-library
  mediaplayerserver=jsonserver.create()

  //connection aakkan 
  //create a path to db.json
 const router= jsonserver.router('db.json')


 //communicate data(onn js and another is .json)

 //middleware to convert

  const middleware=jsonserver.defaults()

  //connect
  mediaplayerserver.use(middleware)
  mediaplayerserver.use(router)
  

  //by default aayt run cheyynne port 3000 ath maattan

  //set up port for server
  const  port=5002 || process.env.PORT

  //monitor the port (5002)
  mediaplayerserver.listen(port, ()=>{
      console.log(`Server running on ${port}`)})
