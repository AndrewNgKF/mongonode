// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo' + err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   _id: 12345,
  //   name: 'Andrew',
  //   age: 100,
  //   location: 'Singapore'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert User' + err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
