import express from 'express';
const app = express();
import user_inform from './routes/user_inform';

app.use('/user_inform', user_inform);

const port = 3001;
app.listen(port, () => console.log('Server is running on port ${port}'));