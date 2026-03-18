import type { TeacherDto } from "@academic/teachers/application/dto/teacher.dto";
import { type TeacherRepository } from "@academic/teachers/domain/repositories/teacher-repository.interface";
export declare class EditTeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    execute(id: string, dto: TeacherDto): Promise<void>;
}
