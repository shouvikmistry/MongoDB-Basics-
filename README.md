# MongoDB-Basics

A beginner-friendly project to help you get started with MongoDB. This repository contains simple scripts and instructions for connecting to, querying, and manipulating data in MongoDB using JavaScript.

## Features
- Connect to a MongoDB database
- Perform basic CRUD (Create, Read, Update, Delete) operations
- Example scripts for common MongoDB tasks

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally or access to a MongoDB Atlas cluster

## Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/MongoDB-Basics.git
   cd MongoDB-Basics
   ```
2. Install dependencies:
   ```sh
   npm install mongodb
   ```

## Usage
- Edit `playground.mongodb.js` to update your MongoDB connection string and try out the sample operations.
- Run the script:
   ```sh
   node playground.mongodb.js
   ```

## Example
```js
// playground.mongodb.js
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // Update with your connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('testdb');
    const collection = db.collection('testcollection');
    // Insert a document
    await collection.insertOne({ name: 'Alice', age: 25 });
    // Find documents
    const docs = await collection.find().toArray();
    console.log(docs);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```

## Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

## License
This project is licensed under the MIT License.
