import { MongoClient, Db, Collection } from 'mongodb';

let db: Db;

export async function initDb(uri: string, dbName: string) {
  if (db) return db;

  const client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  return db;
}

export function getDb(): { db: Db; technologyCollection: Collection } {
  if (!db) {
    throw new Error('DB not initialized');
  }
  return {
    db: db,
    technologyCollection: db.collection('technology'),
  };
}
