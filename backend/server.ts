import express from 'express';
import quizRoutes from './routes/quizRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
