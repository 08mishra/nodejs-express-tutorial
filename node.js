//  // jshint esversion:6


/*********************************************************************************** */
//                                                                                    //
//                                                                                    //
//                                     NODE TUTORIAL                               //
//                                                                                    //
//                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////


 /* example of different async function http request and file directory */
//  console.log("hello world");
//  console.time();
//  var http = require('http');
 
// const  {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
// const { resolve } = require('path');

// const first= readFileSync('./first.txt', 'utf8');
// const second= readFileSync('./second.txt', 'utf8');
// console.log(first, second);
// writeFileSync(
//     './first.txt', 'here comes first and second', {flag:'a'}
// )


// readFile('./first.txt', 'utf8', (err, result)=>{
//   if(err){
//     throw err;
//     return;
//   }
//   const first= result;
//   console.log(first);
// })

// http.createServer(function (request, response) {
//  // console.log(request);
//  if(request.url==='/'){
//   // response.writeHead(200, {'Content-Type': 'text/plain'});
//   // response.write('welcome to our home page, this is Prashant here');
//   response.end('hello home');
//  }
//  if(request.url==='/about'){
//   // response.writeHead(200, {'Content-Type': 'text/plain'});
//   // response.write('welcome to our about page page, I am 21');
//   response.end('hello about');
//  }
//   // response.writeHead(200, {'Content-Type': 'text/plain'});
//   // response.write('welcome to our any page, this is Prashant here');
//   // response.end();
//   response.end(`<h1> sorry 400 </h1>`);
// }).listen(8080, '127.0.0.1');

// console.log('running server!');
 /* readfile is async function so it is also an example of event loop */
// const {readFile} = require('fs');

// console.log('starting reading');

// readFile('./first.txt', 'utf8', (err, result)=>{
//   if(err){
//     console.log(err);
//     return
//   }
//   console.log(result);

// })

// console.log('file reading completed');


/* event loop using timing functions */

// console.log('first');
// setTimeout(()=>{
//   console.log('second');
// }, 10);
// console.log('third');
/* here in above function setimeout will run at end */

/*below setinternval is also an asynchronomas function*/

// console.log('one');
// setInterval(()=>{
//   console.log('two');
// }, 2000);
// console.log('third');
/* above function will work at every two second and we will not exist of the process */

/* async await and promises */

// const getText =(path)=>{
//   return new Promise((resolve, reject)=>{
//     readFile(path, 'utf8', (err, data)=>{
//       if(err){
//         reject(err);
//       }else{
//         resolve(data);
//       }
//     })
//   })
// }

// getText('./first.txt').then(result=>{
//   console.log(result);
// }).catch(err=>{
//   console.log(err);
// })

// /*using async for the same  the function will envoke after all problems resolve we can use try and catch for better control*/
// console.log('************************************');

// const start= async()=>{
//   try{
//     const first= await getText('./first.txt');
//     console.log(first)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// start()

/* events in node for example when user click on a button , events are used heavily in node-js*/

/* when our events evoke something will be called */

// const EventEmitter = require('events');

// const customEmitter= new EventEmitter(); /* creatin an instance of eventEmitter */
// /* on is property when method name response clicked a callback function will work */
// customEmitter.on('response', ()=>{
//   console.log('events recieved')
// })

// customEmitter.on('response', (name, id)=>{
//   console.log(`${name} and ${id} received` ) /* we can have many events with same name and order matters */
// })
// /*ORDER OF EVENTS MATTERES */
// /* to emit a events .emit is used */

// customEmitter.emit('response','john', '34'); /* the name of events must be matched and we can add arguments in events emit */


/* STREAMS in node writable, readable, duplex and transfor where we can write,read, read and write and modify respectively */
/* streams are handy when you have to read or write big files where readFile and so on doesn't work */

// for(let i=0; i<1000; i++){
//     writeFileSync('./big.txt', 'hello world')
// }

// const {createReadStream} = require('fs');

// const stream= createReadStream('./big.txt', {highWaterMark:9000, encoding:'utf8'});
// /* highwatermark is for the upto which lenght data is visible to us and rest will show remaining and encoding to show in our understable language */

// stream.on('data', (result)=>{
//     console.log(result.length)

// })

// stream.on('error', (Err)=>{
//     console.log(Err)
// })

/*********************************************************************************** */
//                                                                                    //
//                                                                                    //
//                                     EXPRESS TUTORIAL                               //
//                                                                                    //
//                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////


// /*  */
// const http= require('http');
// const express= require('express');
// const app= express();
// const {readFileSync} = require('fs');
// const homePage= readFileSync('./index.html')// because home page we want to run every time server restart

// const server = http.createServer((req, res)=>{
//     console.log('working');
//     const url= req.url;
//     if(url=='/'){
//         res.writeHead(200, {'content-type':'text/html'}) // status code and type of body that we are sending back
//         res.write(homePage) // for writing in the body
//         res.end() // for ending the communication
//     }else
//     if(url=='/about'){
//         res.writeHead(200, {'content-type':'text/html'}) // status code and type of body that we are sending back
//         res.write('<h1>Prashant a web developer </h1>') // for writing in the body
//         res.end() // for ending the communication
//     }
//     else
//     if(url=='/contact'){
//         res.writeHead(200, {'content-type':'text/html'}) // status code and type of body that we are sending back
//         res.write('<h1>email me at amitpic08 </h1>') // for writing in the body
//         res.end() // for ending the communication
//     }else{
        
//             res.writeHead(404, {'content-type':'text/html'}) // status code and type of body that we are sending back
//             res.write('<h1>404 </h1>') // for writing in the body
//             res.end() // for ending the communication
        
//     }
// })

// server.listen(5000);

/*above is just to create a simple server want we learnt in node */

/* in above example we saw setting up a server from scratch but express will all care about it itself here we have to write header , body and at the end res.end() */

/* express is minimal and flexible nodejs framework help us in creating web app and apis much faster  */

// const express= require('express');
// const app = express();
// const path= require('path');
// app.use(express.static('Navbar')); // that is whatever is inside navbar folder express automatically reqire them

/*app.get -- read data
app.post-- insert data
app.put-- update data
app.delete -- delete data
app.all -- just works with all of them is we cannot find something on server
app.use-- setting up middle ware
app.listen -- runing your server
// */

// app.get('/',  (req, res)=>{
//       //  res.send('Home page')
//       res.sendFile(path.resolve(__dirname, './index.html'));
// })

// app.get('/about', (req, res)=>{
//     res.send('about page')
// })
 

// now if we import suppose navbar in node we have to import also its css and javascript but here in express we can overcome by 
// writin following

//  app.get('/navbar', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './Navbar/Navbar.html'))
// })



// app.all('*', (req, res)=>{
//     res.status(404).send('404')
// })
// above if user access any thing other than server then it will show this
// app.listen(5000, ()=>{
//     console.log('app is working')
// })


///////////////////////////////////////////////////////////////////////////
//                                                                      //
//                API and SSR(server side rendering)                    //
//                                                                      //
///////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const app = express();
// const jsondata= require('./Jsondata.json')

// app.get('/', (req, res)=>{
//    return res.json(jsondata)
// })
// // setting up routing for our data in express
// app.get('/api/:id', (req, res)=>{
//     console.log(req.params);
//    // res.send('hello world')
//    const {id}= req.params
//    const sortedData= jsondata.find((data)=>{
//        return data.id===Number(id)
//    })
//   return res.send(sortedData)
// })

// app.get('/api/v1/query', (req, res)=>{
//     console.log(req.query);
//     //console.log(req.path);

//     const {search}= req.query;
//     if(search){
//         const product= jsondata.filter((data)=>{
//             return data.name.startsWith(search)
//         })
//        return res.json(product)
//     }

//    return res.status(200).json({success:true, data:[]})
// })

// app.listen(8000, ()=>{
//     console.log('server is runing on port 8000')
// })

// Middlewarte--> are functions that exicutes during request of server each have has access to response and request
// it is literally everywhere in express


// const express= require('express');
 
// const app = express();
// const data = require('./Jsondata.json');
 
// req ==> middleware ==>res
// we can use middleware as many times we want as in line number 325
// const middleware = (req,res,next)=>{
//     const date = new Date().getFullYear();
//     console.log(date)
    
//     //after setting res.send or next the problem of line 320 and 321 will be solved
//     //res.send('welcome middleware')
//     next()
// } 
// app.use(middleware) // here we can also add specific path name for which it may be applied app.use('/api', middleware)
// we can also use multiple middleware e.g- app.use([first,second]) they will be executed in the order
// middleware are powerful they can handle request and response here if we are not setting any next or response then 
// // our server will not display anything
// app.get('/',middleware, (req, res)=>{ // no need to write middleware here after using app.use
//     res.send('home')
// })
 

// the problem with middleware is that if we want to use middleware 50 number of times we have to call it in every routes
// to overcome this we have app.use method

// to set middleware in every route just use app.use in the top of every route for now i am writing on line 323

// app.get('/about', (req, res)=>{
//     res.send('about page')
// })





//*************************Extra comment ******************************************** */
////////////////////////////////////////////////////////////////////////////////////////
//Most  popular third party middleware for login is morgan npm ==> npm install morgan //
///////////////////////////////////////////////////////////////////////////////////////


// const path= require('path')

//  app.use(express.static('./Form'))

//  app.get('/', (req, res)=>{
//      res.sendFile(path.resolve(__dirname, './Form/Form.html'))
//  })

 

//POST method ==> post on server 

//app.use(express.urlencoded({extended:false})) // built in middleware function in Express. It parses incoming request
// with urlencoded and is based on body parser but now it comes with express
// it allows us to access the form data from form.html


// app.get('/api/people', (req, res)=>{
//     res.status(201).json({success:true, data:data})
// })

// app.post('/api/people', (req, res)=>{
//     const {name} = req.body
    

//     if(!name){
//         res.status(404).json({success:false, msg:'please provide name value'})
//     } 
//         res.status(201).send({success:true, data:name})
    
// })


// app.put('/api/people', (req, res)=>{
//     const {id, name}= req.body;

//     if(!name){
//         res.status(404).json({success:false, msg:'please provide name'});

//     }

//     const people = {id,name};
//     res.status(201).json({success:true,data:[...data, people]})
// })

// app.delete('/api/people/:id', (req, res)=>{
//     const {id, name}= req.params;
//     if(!id){
//         res.status(404).json({success:false, msg:`people with id ${id} does not exist`})
//     }
//     const newPeople = data.filter((people)=>people.id!==Number(id));
//     res.status(201).json({success:true, data:newPeople})
// })

// app.post('/login', (req, res)=>{
//     console.log(req.body)
//     console.log(req.body.name)
//     res.send(req.body.name)
// })
 

// the problem with app.post is to if we have to set it up for every route we have to do it manually
//  and this going to be extremely slow




////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//                              EXPRESS ROUTER                               //
//                                                                           //
//////////////////////////////////////////////////////////////////////////////

/* our app has many routes to overcome this and make group of our routes we use express routes */

 
const express = require('express')
const app= express()
const people = require('./routes')

app.use('/api/people', people) // we use our routes from routes.js file

app.get('/', (req,res)=>{
    res.send('<h1>Hello Prashant</h1>')
})
















app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})