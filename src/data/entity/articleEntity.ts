class ArticleEntity {
    id?: number;
    title?: string;
    content?: string;

    constructor(object: ArticleEntity) {
        this.id = object.id;
        this.title = object.title;
        this.content = object.content;
    }
}

class AddArticleEntity {
    title: string;
    content: string;

    constructor(object: AddArticleEntity) {
        this.title = object.title;
        this.content = object.content;
    }
}

export { ArticleEntity, AddArticleEntity };
