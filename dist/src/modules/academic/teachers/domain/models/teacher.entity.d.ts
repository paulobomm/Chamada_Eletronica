export declare class Teacher {
    private readonly _id?;
    private _name;
    private _email;
    private _document;
    private _registration;
    private _subject;
    private readonly _createdAt?;
    private readonly _updatedAt?;
    private constructor();
    get id(): string | undefined;
    get name(): string;
    get email(): string;
    get document(): string;
    get registration(): string;
    get subject(): string;
    get createdAt(): Date | undefined;
    get updatedAt(): Date | undefined;
    withName(name: string): this;
    withEmail(email: string): this;
    withDocument(document: string): this;
    withRegistration(registration: string): this;
    withSubject(subject: string): this;
    static restore(props?: {
        id?: string;
        name: string;
        email: string;
        document: string;
        registration: string;
        subject: string;
        createdAt?: Date;
        updatedAt?: Date;
    }): Teacher | null;
}
