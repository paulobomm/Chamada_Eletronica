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
exports.StudentsController = void 0;
const student_dto_1 = require("../../application/dto/student.dto");
const create_student_service_1 = require("../../application/services/create-student.service");
const edit_student_service_1 = require("../../application/services/edit-student.service");
const list_students_service_1 = require("../../application/services/list-students.service");
const remove_student_service_1 = require("../../application/services/remove-student.service");
const return_student_service_1 = require("../../application/services/return-student.service");
const common_1 = require("@nestjs/common");
let StudentsController = class StudentsController {
    createStudentService;
    editStudentService;
    listStudentService;
    returnStudentService;
    removeStudentService;
    constructor(createStudentService, editStudentService, listStudentService, returnStudentService, removeStudentService) {
        this.createStudentService = createStudentService;
        this.editStudentService = editStudentService;
        this.listStudentService = listStudentService;
        this.returnStudentService = returnStudentService;
        this.removeStudentService = removeStudentService;
    }
    async findAll() {
        return this.listStudentService.execute();
    }
    async findById(id) {
        return this.returnStudentService.executeById(id);
    }
    async create(body) {
        return this.createStudentService.execute(body);
    }
    async update(id, body) {
        return this.editStudentService.execute(id, body);
    }
    async remove(id) {
        return this.removeStudentService.execute(id);
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "remove", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)("students"),
    __metadata("design:paramtypes", [create_student_service_1.CreateStudentService,
        edit_student_service_1.EditStudentService,
        list_students_service_1.ListStudentsService,
        return_student_service_1.ReturnStudentService,
        remove_student_service_1.RemoveStudentService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map