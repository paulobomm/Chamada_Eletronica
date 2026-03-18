"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDto = void 0;
class TeacherDto {
    name;
    email;
    document;
    registration;
    subject;
    constructor(name, email, document, registration, subject) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.registration = registration;
        this.subject = subject;
    }
    static fromTeacher(teacher) {
        if (!teacher)
            return null;
        return new TeacherDto(teacher.name, teacher.email, teacher.document, teacher.registration, teacher.subject);
    }
}
exports.TeacherDto = TeacherDto;
//# sourceMappingURL=teacher.dto.js.map