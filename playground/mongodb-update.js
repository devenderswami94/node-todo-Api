const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('unable to connect mongodb Server')
    }

    console.log('connected to mongoDb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c0f7895b3a6ae2dae37a2ea')
    }, {

        $set: {
            completed: false
        }
    },
    {
         returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });




    db.close();

});