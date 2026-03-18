import { StudentDto } from "@academic/students/application/dto/student.dto";
import { type StudentRepository } from "@academic/students/domain/repositories/student-repository.interface";
export declare class ReturnStudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    executeById(id: string): Promise<StudentDto | null>;
    executeByEmail(email: string): Promise<StudentDto | null>;
}
