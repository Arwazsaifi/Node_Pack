// const {MongoClient}=require('mongodb');
// const url='mongodb://127.0.0.1:27017';
// const dbName='mydatabase';
// const client=new MongoClient(url)

// async function connectdatabase()
// {
//   const result=await client.connect();
//   console.log("database connected");
  
//   const db=result.db(dbName);
//   // db.createCollection('product',function(err,db){
//   //   if(err) throw err;
//   // })
// // const productCollection=db.collections('product1');
// // const productData=[
// //   {name:'simmy',id:'1'},
// //   {name:'Hari',id:'2'},
// // ]

// // await productCollection.insertMany(productData);

// const productKey=
//   [
//       { name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
//     { name: "Tom Moody", age: "31", address: "CA"},  
//     { name: "Zahira Wasim", age: "19", address: "Islamabad"},  
//     { name: "Juck Ross", age: "45", address: "London"} 
//     // ]
// ]
// // {
// //   name:'Mobile',
// //   brand:'vivo',
// //   price:'120000',
// // }
//  await db.collection('product').insertMany(productKey);

// // const myObj=[
// //   { name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
// // { name: "Tom Moody", age: "31", address: "CA"},  
// // { name: "Zahira Wasim", age: "19", address: "Islamabad"},  
// // { name: "Juck Ross", age: "45", address: "London"} 
// // ]
// // await db.collections('product').ins
// console.log('data added successfully');

// }


// connectdatabase();

const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'newdb';

// Create a new MongoClients
const client = new MongoClient(url);

// Function to create the collection and add documents
async function createCollection() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Create the "user" collection
    const userCollection = db.collection('user');

    // Create the "userProfile" collection
    const userProfileCollection = db.collection('userProfile');

    // Define the keys for the "user" document
    const userKeys = {
      username: 'JohnDoe',
      password: 'password123',
      email: 'johndoe@example.com'
      // Add any other desired keys and values for the "user" document
    };

    // Define the keys for the "userProfile" document
    const userProfileKeys = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      // Add any other desired keys and values for the "userProfile" document
    };

    // Insert the "user" document into the collection
    await userCollection.insertOne(userKeys);

    // Insert the "userProfile" document into the collection
    await userProfileCollection.insertOne(userProfileKeys);

    console.log('Documents added successfully.');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
}

// Call the function to create the collection and add documents
createCollection();
