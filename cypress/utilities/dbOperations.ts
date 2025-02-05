const { MongoClient } = require("mongodb");

const getMongoClient = () =>
  new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export const getPlayers = async ({ dbCollection }) => {
  const client = getMongoClient();
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(dbCollection);
    const result = await collection.find({}).toArray();
    return result;
  } catch (error) {
    console.error("Error retrieving players:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const createPlayer = async ({ record }) => {
  const client = getMongoClient();
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);
    const result = await collection.insertOne(record);
    return result;
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const updatePlayer = async ({ queryUpdate, updateObject }) => {
  const client = getMongoClient();

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);
    const result = await collection.findOneAndUpdate(
      queryUpdate,
      { $set: updateObject },
      { returnDocument: "after" }
    );
    if (!result) {
      throw new Error("Player not found");
    }
    return result;
  } catch (error) {
    console.error("Error updating player:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const deletePlayer = async ({ findQueryToDelete }) => {
  const client = getMongoClient();
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);
    console.log("Finding document with query:", findQueryToDelete);

    const documentToDelete = await collection.findOne(findQueryToDelete);
    console.log("Found document:", documentToDelete);

    if (!documentToDelete) {
      throw new Error("No matching document found for deletion");
    }

    const result = await collection.deleteOne(findQueryToDelete);

    if (result.deletedCount === 1) {
      console.log("Successfully deleted document.");
      return { success: true, deletedDocument: documentToDelete };
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
      return { success: false, message: "No documents deleted" };
    }
  } catch (error) {
    console.error("Error updating player:", error);
    throw error;
  } finally {
    await client.close();
  }
};
