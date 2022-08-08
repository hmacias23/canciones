//npm init
//npm install express --save
var express = require('express');
var router = express.Router();
var path = require('path');

/////MIDDLEWARES/////
router.use('/tabla', function (req, res, next) {
    console.log('GET');
    next();
  }
);
  router.use('/TESTPOST', function (req, res, next) {
      console.log('PUT');
      next();
    }
  );
router.use('/TESTPUT', function (req, res, next) {
    console.log('PUT');
    next();
  });
   
router.use('/TESTDELETE', function (req, res, next) {
      console.log('DELETE');
      next();
    }
  );

///// Metodos de RUTA
router.get('/tabla', function (req, res) {
    res.sendFile(path.join(__dirname,'templates','tabla.html'));
    next();
});

router.post('/TESTPOST', function (req, res) {
    res.send('Respuesta a Post');
    next();
});

router.put('/TESTPUT', function (req, res) {
    res.send('Respuesta a PUT');
    next();
  });

router.delete('/TESTDELETE', function (req, res) {
    res.send('Respuesta a DELETE');
});

module.exports = router;
