"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.studentsSchema = (0, pg_core_1.pgTable)("students", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    document: (0, pg_core_1.varchar)("document", { length: 20 }).notNull().unique(),
    registration: (0, pg_core_1.varchar)("registration", { length: 20 }).notNull().unique(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true }).notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true }).notNull(),
});
//# sourceMappingURL=student.schema.js.map