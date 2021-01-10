export class Article{
    id: number;
    author_id: number;
    title: string;
    content: string;
    short_description: string;

    constructor(id: number, author_id: number, title: string, content: string, short_description: string){
        this.id = id;
        this.author_id = author_id;
        this.title = title;
        this.content = content;
        this.short_description = short_description;
    }
}