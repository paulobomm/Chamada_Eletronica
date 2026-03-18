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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrizzleStudentRepository = void 0;
const student_entity_1 = require("../../domain/models/student.entity");
const drizzle_service_1 = require("../../../../../shared/infra/database/drizzle.service");
const common_1 = require("@nestjs/common");
const drizzle_orm_1 = require("drizzle-orm");
const student_schema_1 = require("../database/schemas/student.schema");
let DrizzleStudentRepository = class DrizzleStudentRepository {
    drizzleService;
    constructor(drizzleService) {
        this.drizzleService = drizzleService;
    }
    async create(student) {
        await this.drizzleService.db.insert(student_schema_1.studentsSchema).values({
            name: student.name,
            email: student.email,
            document: student.document,
            registration: student.registration,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    async update(student) {
        await this.drizzleService.db
            .update(student_schema_1.studentsSchema)
            .set({
            name: student.name,
            email: student.email,
            document: student.document,
            registration: student.registration,
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(student_schema_1.studentsSchema.id, student.id));
    }
    async delete(id) {
        await this.drizzleService.db
            .delete(student_schema_1.studentsSchema)
            .where((0, drizzle_orm_1.eq)(student_schema_1.studentsSchema.id, id));
    }
    async findById(id) {
        const result = await this.drizzleService.db
            .select()
            .from(student_schema_1.studentsSchema)
            .where((0, drizzle_orm_1.eq)(student_schema_1.studentsSchema.id, id))
            .limit(1);
        return student_entity_1.Student.restore(result[0]);
    }
    async findByEmail(email) {
        const result = await this.drizzleService.db
            .select()
            .from(student_schema_1.studentsSchema)
            .where((0, drizzle_orm_1.eq)(student_schema_1.studentsSchema.email, email.toLowerCase()))
            .limit(1);
        return student_entity_1.Student.restore(result[0]);
    }
    async findAll() {
        const rows = await this.drizzleService.db.select().from(student_schema_1.studentsSchema);
        return rows.map((row) => student_entity_1.Student.restore(row));
    }
};
exports.DrizzleStudentRepository = DrizzleStudentRepository;
exports.DrizzleStudentRepository = DrizzleStudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [drizzle_service_1.DrizzleService])
], DrizzleStudentRepository);
//# sourceMappingURL=drizzle-student.repository.js.map