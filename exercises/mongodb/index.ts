import dotenv from 'dotenv';
import { app } from './src/app';

dotenv.config();

const PORT = 3000;

// Run Server via `npm run dev` defined in package.json
const startServer = async () => {
  app.listen(PORT, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
