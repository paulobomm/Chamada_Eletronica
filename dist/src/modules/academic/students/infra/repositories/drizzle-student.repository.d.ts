import { Student } from "@academic/students/domain/models/student.entity";
import type { StudentRepository } from "@academic/students/domain/repositories/student-repository.interface";
import { DrizzleService } from "@infra/database/drizzle.service";
export declare class DrizzleStudentRepository implements StudentRepository {
    private readonly drizzleService;
    constructor(drizzleService: DrizzleService);
    create(student: Student): Promise<void>;
    update(student: Student): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Student | null>;
    findByEmail(email: string): Promise<Student | null>;
    findAll(): Promise<Student[]>;
}
