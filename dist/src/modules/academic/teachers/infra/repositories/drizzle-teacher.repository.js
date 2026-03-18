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
exports.DrizzleTeacherRepository = void 0;
const teacher_entity_1 = require("../../domain/models/teacher.entity");
const drizzle_service_1 = require("../../../../../shared/infra/database/drizzle.service");
const common_1 = require("@nestjs/common");
const drizzle_orm_1 = require("drizzle-orm");
const teacher_schema_1 = require("../database/schemas/teacher.schema");
let DrizzleTeacherRepository = class DrizzleTeacherRepository {
    drizzleService;
    constructor(drizzleService) {
        this.drizzleService = drizzleService;
    }
    async create(teacher) {
        await this.drizzleService.db.insert(teacher_schema_1.teachersSchema).values({
            name: teacher.name,
            email: teacher.email,
            document: teacher.document,
            registration: teacher.registration,
            subject: teacher.subject,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    async update(teacher) {
        await this.drizzleService.db
            .update(teacher_schema_1.teachersSchema)
            .set({
            name: teacher.name,
            email: teacher.email,
            document: teacher.document,
            registration: teacher.registration,
            subject: teacher.subject,
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(teacher_schema_1.teachersSchema.id, teacher.id));
    }
    async delete(id) {
        await this.drizzleService.db
            .delete(teacher_schema_1.teachersSchema)
            .where((0, drizzle_orm_1.eq)(teacher_schema_1.teachersSchema.id, id));
    }
    async findById(id) {
        const result = await this.drizzleService.db
            .select()
            .from(teacher_schema_1.teachersSchema)
            .where((0, drizzle_orm_1.eq)(teacher_schema_1.teachersSchema.id, id))
            .limit(1);
        return teacher_entity_1.Teacher.restore(result[0]);
    }
    async findByEmail(email) {
        const result = await this.drizzleService.db
            .select()
            .from(teacher_schema_1.teachersSchema)
            .where((0, drizzle_orm_1.eq)(teacher_schema_1.teachersSchema.email, email.toLowerCase()))
            .limit(1);
        return teacher_entity_1.Teacher.restore(result[0]);
    }
    async findAll() {
        const rows = await this.drizzleService.db.select().from(teacher_schema_1.teachersSchema);
        return rows.map((row) => teacher_entity_1.Teacher.restore(row));
    }
};
exports.DrizzleTeacherRepository = DrizzleTeacherRepository;
exports.DrizzleTeacherRepository = DrizzleTeacherRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [drizzle_service_1.DrizzleService])
], DrizzleTeacherRepository);
//# sourceMappingURL=drizzle-teacher.repository.js.map