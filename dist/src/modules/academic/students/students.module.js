"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const create_student_service_1 = require("./application/services/create-student.service");
const edit_student_service_1 = require("./application/services/edit-student.service");
const list_students_service_1 = require("./application/services/list-students.service");
const remove_student_service_1 = require("./application/services/remove-student.service");
const return_student_service_1 = require("./application/services/return-student.service");
const student_repository_interface_1 = require("./domain/repositories/student-repository.interface");
const students_controller_1 = require("./infra/controllers/students.controller");
const drizzle_student_repository_1 = require("./infra/repositories/drizzle-student.repository");
const database_module_1 = require("../../../shared/infra/database/database.module");
const common_1 = require("@nestjs/common");
let StudentsModule = class StudentsModule {
};
exports.StudentsModule = StudentsModule;
exports.StudentsModule = StudentsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [students_controller_1.StudentsController],
        providers: [
            create_student_service_1.CreateStudentService,
            edit_student_service_1.EditStudentService,
            list_students_service_1.ListStudentsService,
            return_student_service_1.ReturnStudentService,
            remove_student_service_1.RemoveStudentService,
            drizzle_student_repository_1.DrizzleStudentRepository,
            {
                provide: student_repository_interface_1.STUDENT_REPOSITORY,
                useExisting: drizzle_student_repository_1.DrizzleStudentRepository,
            },
        ],
    })
], StudentsModule);
//# sourceMappingURL=students.module.js.map