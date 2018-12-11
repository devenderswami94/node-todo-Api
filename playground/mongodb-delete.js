const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('unable to connect mongodb Server')
    }

    console.log('connected to mongoDb server');

   //deleteMany
   //  db.collection('Todos').deleteMany({text: 'eat someone lunch'}).then((result)=>{
   //
   //      console.log(result);
   //  },(err)=>{
   //      console.log('unable to fatch docs',err);
   //  });


    //delete one

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //
    //     console.log(result);
    // },(err)=>{
    //     console.log('unable to fatch docs',err);
    // });

    //findoneAnddelete


    db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result)=>{

        console.log(result);
    },(err)=>{
        console.log('unable to fatch docs',err);
    });






    db.close();

});