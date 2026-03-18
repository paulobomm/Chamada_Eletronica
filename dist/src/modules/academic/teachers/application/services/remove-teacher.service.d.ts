import { type TeacherRepository } from "@academic/teachers/domain/repositories/teacher-repository.interface";
export declare class RemoveTeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    execute(id: string): Promise<void>;
}
