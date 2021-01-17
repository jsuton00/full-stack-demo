const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
require('dotenv').config();

const port = process.env.PORT || 8000;

app.use(middlewares);
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
