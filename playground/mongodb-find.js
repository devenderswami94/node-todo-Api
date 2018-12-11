const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('unable to connect mongodb Server')
    }

    console.log('connected to mongoDb server');




   // db.collection('Todos').find().toArray().then((docs)=>{
   //     console.log('todos');
   //     console.log(JSON.stringify(docs,undefined,2))
   // },(err)=>{
   //     console.log('unable to fatch docs',err);
   // });

    //without query in find function


    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('unable to fatch docs',err);
    });

    //without query in find function

    db.close();

});