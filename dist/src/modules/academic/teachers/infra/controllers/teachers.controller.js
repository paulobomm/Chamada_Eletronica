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
exports.TeachersController = void 0;
const teacher_dto_1 = require("../../application/dto/teacher.dto");
const create_teacher_service_1 = require("../../application/services/create-teacher.service");
const edit_teacher_service_1 = require("../../application/services/edit-teacher.service");
const list_teachers_service_1 = require("../../application/services/list-teachers.service");
const remove_teacher_service_1 = require("../../application/services/remove-teacher.service");
const return_teacher_service_1 = require("../../application/services/return-teacher.service");
const common_1 = require("@nestjs/common");
let TeachersController = class TeachersController {
    createTeacherService;
    editTeacherService;
    listTeacherService;
    returnTeacherService;
    removeTeacherService;
    constructor(createTeacherService, editTeacherService, listTeacherService, returnTeacherService, removeTeacherService) {
        this.createTeacherService = createTeacherService;
        this.editTeacherService = editTeacherService;
        this.listTeacherService = listTeacherService;
        this.returnTeacherService = returnTeacherService;
        this.removeTeacherService = removeTeacherService;
    }
    async findAll() {
        return this.listTeacherService.execute();
    }
    async findById(id) {
        return this.returnTeacherService.executeById(id);
    }
    async create(body) {
        return this.createTeacherService.execute(body);
    }
    async update(id, body) {
        return this.editTeacherService.execute(id, body);
    }
    async remove(id) {
        return this.removeTeacherService.execute(id);
    }
};
exports.TeachersController = TeachersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teacher_dto_1.TeacherDto]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, teacher_dto_1.TeacherDto]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "remove", null);
exports.TeachersController = TeachersController = __decorate([
    (0, common_1.Controller)("teachers"),
    __metadata("design:paramtypes", [create_teacher_service_1.CreateTeacherService,
        edit_teacher_service_1.EditTeacherService,
        list_teachers_service_1.ListTeachersService,
        return_teacher_service_1.ReturnTeacherService,
        remove_teacher_service_1.RemoveTeacherService])
], TeachersController);
//# sourceMappingURL=teachers.controller.js.map