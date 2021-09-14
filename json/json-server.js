const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
  console.log(res);
  res.json({
    'status': 'OK',
    'statusCode': 200,
    data: res.locals.data
  })
}

server.use(middlewares);
server.use(router);
server.listen(3001);
