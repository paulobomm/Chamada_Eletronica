"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    _id;
    _name;
    _email;
    _document;
    _registration;
    _subject;
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
    get subject() {
        return this._subject;
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
    withSubject(subject) {
        this._subject = subject;
        return this;
    }
    static restore(props) {
        if (!props)
            return null;
        const teacher = new Teacher(props.id, props.createdAt, props.updatedAt);
        teacher._name = props.name;
        teacher._email = props.email;
        teacher._document = props.document;
        teacher._registration = props.registration;
        teacher._subject = props.subject;
        return teacher;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.entity.js.map