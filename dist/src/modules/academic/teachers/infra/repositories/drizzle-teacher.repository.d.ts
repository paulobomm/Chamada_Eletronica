import { Teacher } from "@academic/teachers/domain/models/teacher.entity";
import type { TeacherRepository } from "@academic/teachers/domain/repositories/teacher-repository.interface";
import { DrizzleService } from "@infra/database/drizzle.service";
export declare class DrizzleTeacherRepository implements TeacherRepository {
    private readonly drizzleService;
    constructor(drizzleService: DrizzleService);
    create(teacher: Teacher): Promise<void>;
    update(teacher: Teacher): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Teacher | null>;
    findByEmail(email: string): Promise<Teacher | null>;
    findAll(): Promise<Teacher[]>;
}
