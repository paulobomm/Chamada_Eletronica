import { TeacherDto } from "@academic/teachers/application/dto/teacher.dto";
import { type TeacherRepository } from "@academic/teachers/domain/repositories/teacher-repository.interface";
export declare class ReturnTeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    executeById(id: string): Promise<TeacherDto>;
}
