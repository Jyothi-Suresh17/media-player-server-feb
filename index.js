//step 1
const jsonServer = require('json-server'); //imported the library

//2 create path for db.json file using router method[function] for storing data

const router=jsonServer.router('db.json')

//3 create midddleware to convert js to  json and for that we use defaults that automatically coverts  

const midddleware=jsonServer.defaults()

//4 craete json server for storing datas 

const mediaPlayerServer = jsonServer.create() //this is the server

//5 server should use middlewear and router for converting and storing data when logical operations are performed

mediaPlayerServer.use(midddleware); //this order is important ..first convert then store
mediaPlayerServer.use(router);

//6 set PORT for server 

PORT =3000 || process.env.PORT //if 3000 is not available we need another PORT and for that we process.env.PORT ..env-environment variable


//7 to run our server in the above mentoned PORT -listen method[listens to all the comming request and resolves them]

mediaPlayerServer.listen(PORT,()=>{
  console.log(`Server running  successfully at port number ${PORT}`);
})