"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDto = void 0;
class StudentDto {
    name;
    email;
    document;
    registration;
    constructor(name, email, document, registration) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.registration = registration;
    }
    static fromStudent(student) {
        if (!student)
            return null;
        return new StudentDto(student.name, student.email, student.document, student.registration);
    }
}
exports.StudentDto = StudentDto;
//# sourceMappingURL=student.dto.js.map