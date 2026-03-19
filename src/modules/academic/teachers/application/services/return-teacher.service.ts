import { TeacherDto } from "@academic/teachers/application/dto/teacher.dto";
import {
  TEACHER_REPOSITORY,
  type TeacherRepository,
} from "@academic/teachers/domain/repositories/teacher-repository.interface";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ReturnTeacherService {
  constructor(
    @Inject(TEACHER_REPOSITORY)
    private readonly teacherRepository: TeacherRepository,
  ) {}

  async executeById(id: string): Promise<TeacherDto> {
    const teacher = await this.teacherRepository.findById(id);

    if (!teacher) {
      throw new NotFoundException("Teacher not found");
    }

    return TeacherDto.fromTeacher(teacher)!;
  }
}
