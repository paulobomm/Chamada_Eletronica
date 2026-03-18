import type { StudentDto } from "@academic/students/application/dto/student.dto";
import { type StudentRepository } from "@academic/students/domain/repositories/student-repository.interface";
export declare class CreateStudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    execute(dto: StudentDto): Promise<void>;
}
