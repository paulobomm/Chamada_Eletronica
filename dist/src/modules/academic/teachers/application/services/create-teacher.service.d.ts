import type { TeacherDto } from "@academic/teachers/application/dto/teacher.dto";
import { type TeacherRepository } from "@academic/teachers/domain/repositories/teacher-repository.interface";
export declare class CreateTeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    execute(dto: TeacherDto): Promise<void>;
}
