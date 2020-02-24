module.exports =function(app){
  const user = require('../controller/UserController');

  app.post('/register',user.create);
  app.post('/login',user.login);
  app.get('/users',user.findAll);
  app.get('/users/:id',user.findById);
  app.put('/userupdate/:id',user.update);
  app.delete('/users/:id',user.delete);
}
