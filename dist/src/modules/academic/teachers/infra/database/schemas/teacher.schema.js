"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.teachersSchema = (0, pg_core_1.pgTable)("teachers", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    document: (0, pg_core_1.varchar)("document", { length: 20 }).notNull().unique(),
    registration: (0, pg_core_1.varchar)("registration", { length: 20 }).notNull().unique(),
    subject: (0, pg_core_1.varchar)("subject", { length: 255 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true }).notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true }).notNull(),
});
//# sourceMappingURL=teacher.schema.js.map