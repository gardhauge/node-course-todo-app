//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //     _id: new ObjectID('59450e994fb9b41be27dd82c')
  //   }).toArray().then((docs) => {
  //   console.log('todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Gard'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
