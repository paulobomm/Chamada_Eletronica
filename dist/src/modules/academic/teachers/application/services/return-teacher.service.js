"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnTeacherService = void 0;
const teacher_dto_1 = require("../dto/teacher.dto");
const teacher_repository_interface_1 = require("../../domain/repositories/teacher-repository.interface");
const common_1 = require("@nestjs/common");
let ReturnTeacherService = class ReturnTeacherService {
    teacherRepository;
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async executeById(id) {
        const teacher = await this.teacherRepository.findById(id);
        if (!teacher) {
            throw new common_1.NotFoundException("Teacher not found");
        }
        return teacher_dto_1.TeacherDto.fromTeacher(teacher);
    }
};
exports.ReturnTeacherService = ReturnTeacherService;
exports.ReturnTeacherService = ReturnTeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(teacher_repository_interface_1.TEACHER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ReturnTeacherService);
//# sourceMappingURL=return-teacher.service.js.map