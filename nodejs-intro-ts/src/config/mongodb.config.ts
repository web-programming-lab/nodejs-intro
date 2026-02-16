export const MONGODB_CONFIG = {
  fetchConnectionString: (password: string) =>
    `mongodb+srv://hslu-weblab:${password}@weblab-mongodb.1wenupb.mongodb.net/?retryWrites=true&w=majority&appName=weblab-mongodb`,
  DB_NAME: 'techradar',
  COLLECTIONS: {
    TECHNOLOGY: 'technologies',
  },
};
