// src/data/service/ArticleService.ts
import FetchUtils from "../../utility/FetchUtils";
import { BASE_URL } from "../../Constant";
import { ArticleEntity } from "../entity/articleEntity";

class ArticleService {
    static async getAllArticles(): Promise<{ message: string, status: number, data: ArticleEntity[] }> {
        const resp = await FetchUtils.fetchAuth(`${BASE_URL}/api/articles`);

        if (resp.status !== 200) {
            throw new Error(resp.message);
        }

        const data: ArticleEntity[] = resp.data.map((article: any) => new ArticleEntity(article));
        return { ...resp, data };
    }

    static async getArticleById(id: number): Promise<ArticleEntity> {
        const resp = await FetchUtils.fetchAuth(`${BASE_URL}/api/articles/${id}`);

        if (resp.status !== 200) {
            throw new Error(resp.message);
        }

        return new ArticleEntity(resp.data);
    }

    static async createArticle(article: Omit<ArticleEntity, 'id'>) {
        const resp = await FetchUtils.fetchAuth(`${BASE_URL}/api/articles`, {
            method: 'POST',
            body: JSON.stringify(article),
        });

        if (resp.status !== 201) {
            throw new Error(resp.message);
        }

        return resp;
    }

    static async updateArticle(id: number, article: Partial<ArticleEntity>) {
        const resp = await FetchUtils.fetchAuth(`${BASE_URL}/api/articles/${id}`, {
            method: 'PUT',
            body: JSON.stringify(article),
        });

        if (resp.status !== 200) {
            throw new Error(resp.message);
        }

        return resp;
    }

    static async deleteArticle(id: number) {
        const resp = await FetchUtils.fetchAuth(`${BASE_URL}/api/articles/${id}`, {
            method: 'DELETE',
        });

        if (resp.status !== 200) {
            throw new Error(resp.message);
        }

        return resp;
    }
}

export { ArticleService };
