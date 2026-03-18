"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    _id;
    _name;
    _email;
    _document;
    _registration;
    _createdAt;
    _updatedAt;
    constructor(id, createdAt, updatedAt) {
        this._id = id;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get document() {
        return this._document;
    }
    get registration() {
        return this._registration;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    withName(name) {
        this._name = name;
        return this;
    }
    withEmail(email) {
        this._email = email;
        return this;
    }
    withDocument(document) {
        this._document = document;
        return this;
    }
    withRegistration(registration) {
        this._registration = registration;
        return this;
    }
    static restore(props) {
        if (!props)
            return null;
        const student = new Student(props.id, props.createdAt, props.updatedAt);
        student._name = props.name;
        student._email = props.email;
        student._document = props.document;
        student._registration = props.registration;
        return student;
    }
}
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map