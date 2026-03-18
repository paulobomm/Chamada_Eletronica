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
exports.CreateStudentService = void 0;
const student_entity_1 = require("../../domain/models/student.entity");
const student_repository_interface_1 = require("../../domain/repositories/student-repository.interface");
const common_1 = require("@nestjs/common");
let CreateStudentService = class CreateStudentService {
    studentRepository;
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute(dto) {
        const existing = await this.studentRepository.findByEmail(dto.email);
        if (existing) {
            throw new common_1.ConflictException("Email already registered");
        }
        const student = student_entity_1.Student.restore(dto);
        await this.studentRepository.create(student);
    }
};
exports.CreateStudentService = CreateStudentService;
exports.CreateStudentService = CreateStudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(student_repository_interface_1.STUDENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CreateStudentService);
//# sourceMappingURL=create-student.service.js.map