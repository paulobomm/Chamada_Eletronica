"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersModule = void 0;
const create_teacher_service_1 = require("./application/services/create-teacher.service");
const edit_teacher_service_1 = require("./application/services/edit-teacher.service");
const list_teachers_service_1 = require("./application/services/list-teachers.service");
const remove_teacher_service_1 = require("./application/services/remove-teacher.service");
const return_teacher_service_1 = require("./application/services/return-teacher.service");
const teacher_repository_interface_1 = require("./domain/repositories/teacher-repository.interface");
const teachers_controller_1 = require("./infra/controllers/teachers.controller");
const drizzle_teacher_repository_1 = require("./infra/repositories/drizzle-teacher.repository");
const database_module_1 = require("../../../shared/infra/database/database.module");
const common_1 = require("@nestjs/common");
let TeachersModule = class TeachersModule {
};
exports.TeachersModule = TeachersModule;
exports.TeachersModule = TeachersModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [teachers_controller_1.TeachersController],
        providers: [
            create_teacher_service_1.CreateTeacherService,
            edit_teacher_service_1.EditTeacherService,
            list_teachers_service_1.ListTeachersService,
            return_teacher_service_1.ReturnTeacherService,
            remove_teacher_service_1.RemoveTeacherService,
            drizzle_teacher_repository_1.DrizzleTeacherRepository,
            {
                provide: teacher_repository_interface_1.TEACHER_REPOSITORY,
                useExisting: drizzle_teacher_repository_1.DrizzleTeacherRepository,
            },
        ],
    })
], TeachersModule);
//# sourceMappingURL=teachers.module.js.map