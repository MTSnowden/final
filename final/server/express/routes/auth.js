const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const AuthController = require('../controllers/auth')
const {list,show,create,remove,removeEmpty} = require( "../controllers/controllers");

function isAuthenticated(req, res, next) {
  if (!req.cookies.id_token) {
    return res.status(401).send('Unauthorized')
  }
  const payload = jwt.verify(req.cookies.id_token, "secret")
  req.user = payload._doc
  return next()
}

router.post('/signup', (req, res) => {
  AuthController.SignUp(req.body)
    .then(() => res.send('User created successfully'))
    .catch(err => res.status(400).send(err))
})

router.post('/login', (req, res) => {
  AuthController.Login(req.body)
    .then((result) => {
      if (!result) return res.status(404).send('no user found')
      const token = jwt.sign({ ...result }, "secret")
      return res.send(token)
    })
})

router.put("/user", isAuthenticated, (req, res) => {
  AuthController.UpdateUser(req.user, req.body.userName).then(() =>
    res.send("user updated mami")
  );
});

router.put("/password", isAuthenticated, (req, res) => {
  AuthController.UpdatePassword(req.user, req.body.password).then(() =>
    res.send("password updated papi")
  );
});

router.get("/projects", list);
router.get("/projects/:id", show);
router.post("/projects", create);
router.delete("/projects/:id", remove);
router.delete("/projects/empty", removeEmpty);

module.exports = router