import * as schema from "@academic/students/infra/database/schemas/student.schema";
import { type OnModuleDestroy } from "@nestjs/common";
import { Pool } from "pg";
export declare class DrizzleService implements OnModuleDestroy {
    private readonly pool;
    readonly db: import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> & {
        $client: Pool;
    };
    constructor();
    onModuleDestroy(): Promise<void>;
}
