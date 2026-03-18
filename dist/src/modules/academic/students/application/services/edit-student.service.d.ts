import type { StudentDto } from "@academic/students/application/dto/student.dto";
import { type StudentRepository } from "@academic/students/domain/repositories/student-repository.interface";
export declare class EditStudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    execute(id: string, dto: StudentDto): Promise<void>;
}
