"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const localDb_1 = require("./localDb");
async function DBConnection() {
    try {
        await localDb_1.default.mongoose;
        console.log('connected to mongoose database');
    }
    catch (error) {
        console.error(error);
    }
}
exports.DBConnection = DBConnection;
//# sourceMappingURL=localDbSync.js.map