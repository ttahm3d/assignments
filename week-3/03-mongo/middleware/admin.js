const { Admin } = require("../db/index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB.
  // Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  if (!username || !password) {
    res.status(404);
  }

  Admin.findOne({ username, password }).then((val) =>
    val ? next() : res.status(403).send({ msg: "Admin doesnt exist" })
  );
}

module.exports = adminMiddleware;
