import { type StudentRepository } from "@academic/students/domain/repositories/student-repository.interface";
export declare class RemoveStudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    execute(id: string): Promise<void>;
}
