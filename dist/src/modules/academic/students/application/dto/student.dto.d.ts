import type { Student } from "@academic/students/domain/models/student.entity";
export declare class StudentDto {
    name: string;
    email: string;
    document: string;
    registration: string;
    private constructor();
    static fromStudent(student: Student | null): StudentDto | null;
}
