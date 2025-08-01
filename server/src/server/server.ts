import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT_DEFAULT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
