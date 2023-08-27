var express = require("express");
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Login
 *  description: Login API
 * /api/v1/login:
 *   post:
 *     description: Post login
 *     tags: [Login]
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: Password
 *     responses:
 *       200:
 *         description: Success
 */

router.post("/", function (req, res, next) {
  const username = req.query.username;
  const password = req.query.password;

  if (username === "admin") {
    if (password === "admin") {
      res.send("success");
    }
    res.send("wrong password");
  } else {
    res.send("username not found");
  }
});

module.exports = router;
