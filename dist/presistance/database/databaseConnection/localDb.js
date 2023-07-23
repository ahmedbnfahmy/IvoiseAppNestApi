"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.LOCAL_MONGOOSE_URI);
class Db {
}
Db.mongoose = mongoose_1.default.connect(process.env.LOCAL_MONGOOSE_URI);
exports.default = Db;
//# sourceMappingURL=localDb.js.map