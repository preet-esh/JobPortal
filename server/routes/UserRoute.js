var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

module.exports =function(app){
  const user = require('../controller/UserController');
  app.post('/register',upload.single('profile_pic'), user.create);
  app.post('/login',user.login);
  app.get('/users',user.findAll);
  app.get('/users/:id',user.findById);
  app.put('/userupdate/:id',user.update);
  app.delete('/users/:id',user.delete);
}
