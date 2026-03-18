import { StudentDto } from "@academic/students/application/dto/student.dto";
import { CreateStudentService } from "@academic/students/application/services/create-student.service";
import { EditStudentService } from "@academic/students/application/services/edit-student.service";
import { ListStudentsService } from "@academic/students/application/services/list-students.service";
import { RemoveStudentService } from "@academic/students/application/services/remove-student.service";
import { ReturnStudentService } from "@academic/students/application/services/return-student.service";
export declare class StudentsController {
    private readonly createStudentService;
    private readonly editStudentService;
    private readonly listStudentService;
    private readonly returnStudentService;
    private readonly removeStudentService;
    constructor(createStudentService: CreateStudentService, editStudentService: EditStudentService, listStudentService: ListStudentsService, returnStudentService: ReturnStudentService, removeStudentService: RemoveStudentService);
    findAll(): Promise<StudentDto[]>;
    findById(id: string): Promise<StudentDto | null>;
    create(body: StudentDto): Promise<void>;
    update(id: string, body: StudentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
