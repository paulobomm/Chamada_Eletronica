import type { Student } from "@academic/students/domain/models/student.entity";
export declare const STUDENT_REPOSITORY: unique symbol;
export interface StudentRepository {
    create(student: Student): Promise<void>;
    update(student: Student): Promise<void>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Student[]>;
    findById(id: string): Promise<Student | null>;
    findByEmail(email: string): Promise<Student | null>;
}
