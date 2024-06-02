const MongoClient = require("mongodb").MongoClient;
const dbConnection = require("../fixtures/dbConnection.json");
const client = new MongoClient(dbConnection.MONGO_URI);

const createUser = async ({ record }) => {
  await client.connect();
  const db = client.db(dbConnection.dbName);
  const collection = db.collection(dbConnection.collection);
  const result = await collection.insertOne(record);
  await client.close();
  return result;
};

const getUser = async ({ query }) => {
  await client.connect();
  const db = client.db(dbConnection.dbName);
  const collection = db.collection(dbConnection.collection);
  const result = await collection.findOne(query);
  await client.close();
  return result;
};

const deleteUser = async ({ query }) => {
  await client.connect();
  const db = client.db(dbConnection.dbName);
  const collection = db.collection(dbConnection.collection);
  const result = await collection.deleteOne(query);
  await client.close();
  return result;
};

export const dbTasks = {
  createUser,
  getUser,
  deleteUser,
};
