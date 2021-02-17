/*get the package just install it and use it down to the server */
const jsonServer = require('json-server');
/*we then create and invoke it and the variable server, so then we can use middlewares and router in lines 9 & 10 */
const server = jsonServer.create();
/*we get the router at the moment is only one file */
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
/* and we have our port assigned to 3000 */
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
