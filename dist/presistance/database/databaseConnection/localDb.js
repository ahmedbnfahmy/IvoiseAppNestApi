"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Db {
}
Db.mongoose = mongoose_1.default.connect('mongodb://127.0.0.1:27017');
exports.default = Db;
//# sourceMappingURL=localDb.js.map