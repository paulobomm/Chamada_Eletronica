import type { Teacher } from "@academic/teachers/domain/models/teacher.entity";
export declare const TEACHER_REPOSITORY: unique symbol;
export interface TeacherRepository {
    create(teacher: Teacher): Promise<void>;
    update(teacher: Teacher): Promise<void>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Teacher[]>;
    findById(id: string): Promise<Teacher | null>;
    findByEmail(email: string): Promise<Teacher | null>;
}
