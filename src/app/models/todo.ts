export class Todo {
    public id: number;
    public title: string;
    public description: string;
    public done: boolean;
    constructor(id: number, title: string, description: string, done: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    }
}
