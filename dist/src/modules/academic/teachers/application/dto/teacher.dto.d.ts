import type { Teacher } from "@academic/teachers/domain/models/teacher.entity";
export declare class TeacherDto {
    name: string;
    email: string;
    document: string;
    registration: string;
    subject: string;
    private constructor();
    static fromTeacher(teacher: Teacher | null): TeacherDto | null;
}
