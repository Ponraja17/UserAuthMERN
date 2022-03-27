const crypto = require("crypto");

const JWTPRIVATEKEY = crypto.randomBytes(32).toString("hex");
console.log(JWTPRIVATEKEY);
