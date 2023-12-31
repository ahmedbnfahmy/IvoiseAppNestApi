"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const localDbSync_1 = require("./presistance/database/databaseConnection/localDbSync");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    (0, dotenv_1.config)();
    (0, localDbSync_1.DBConnection)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map