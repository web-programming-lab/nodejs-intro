import { Collection, Db, MongoClient } from 'mongodb';
import { MONGODB_CONFIG } from '../config/mongodb.config';

export class ApplicationDatabase {
  private static db: Db | null = null;
  private static client: MongoClient | null = null;

  static async init(connectionString: string, dbName: string): Promise<void> {
    if (!ApplicationDatabase.db) {
      ApplicationDatabase.client = await MongoClient.connect(connectionString);
      ApplicationDatabase.db = ApplicationDatabase.client.db(dbName);
    }
  }

  static getTechnologyCollection(): Collection {
    if (!ApplicationDatabase.db) {
      throw new Error('DB not initialized');
    }

    return ApplicationDatabase.db.collection(
      MONGODB_CONFIG.COLLECTIONS.TECHNOLOGY,
    );
  }

  static async close(): Promise<void> {
    if (ApplicationDatabase.client) {
      await ApplicationDatabase.client.close();

      ApplicationDatabase.client = null;
      ApplicationDatabase.db = null;
    }
  }
}
