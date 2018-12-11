const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('unable to connect mongodb Server')
    }

    console.log('connected to mongoDb server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //
    //     if (err){
    //       return  console.log('unable to insert to do ',err)
    //     }
    //
    //     console.log(JSON.stringify(result.ops,undefined,2))
    //
    //
    //
    //     }
    //     )


    db.collection('Users').insertOne({
        name: 'Kd',
        age: 25,
        location: 'LA'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user', err)
        }
        console.log(result.ops[0]._id.getTimestamp())


    })

    db.close();

});