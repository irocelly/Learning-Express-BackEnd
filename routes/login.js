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
      res.status(200).json({
        message: "login success",
      });
    }
    res.status(400).json({
      message: "password tidak valid",
      details: "Pastikan password telah diisi dengan benar.",
    });
  } else {
    res.status(400).json({
      message: "username dan password tidak valid",
      details: "Pastikan username dan password telah diisi dengan benar.",
    });
  }
});

module.exports = router;
