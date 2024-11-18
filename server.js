const express = require('express');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
