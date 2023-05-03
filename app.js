const express = require('express');

const app = express();
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(userRoutes);
app.use(adminRoutes);


app.listen(3000);