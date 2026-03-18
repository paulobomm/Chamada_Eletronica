import { TeacherDto } from "@academic/teachers/application/dto/teacher.dto";
import { CreateTeacherService } from "@academic/teachers/application/services/create-teacher.service";
import { EditTeacherService } from "@academic/teachers/application/services/edit-teacher.service";
import { ListTeachersService } from "@academic/teachers/application/services/list-teachers.service";
import { RemoveTeacherService } from "@academic/teachers/application/services/remove-teacher.service";
import { ReturnTeacherService } from "@academic/teachers/application/services/return-teacher.service";
export declare class TeachersController {
    private readonly createTeacherService;
    private readonly editTeacherService;
    private readonly listTeacherService;
    private readonly returnTeacherService;
    private readonly removeTeacherService;
    constructor(createTeacherService: CreateTeacherService, editTeacherService: EditTeacherService, listTeacherService: ListTeachersService, returnTeacherService: ReturnTeacherService, removeTeacherService: RemoveTeacherService);
    findAll(): Promise<TeacherDto[]>;
    findById(id: string): Promise<TeacherDto>;
    create(body: TeacherDto): Promise<void>;
    update(id: string, body: TeacherDto): Promise<void>;
    remove(id: string): Promise<void>;
}
