const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is started at', PORT);
});
