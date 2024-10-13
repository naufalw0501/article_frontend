// src/views/page/article/ArticleForm.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArticleEntity } from '../../../data/entity/articleEntity';
import { ArticleService } from '../../../data/service/ArticleService';
// import { ArticleService } from '../../data/service/ArticleService';
// import { ArticleEntity } from '../../data/entity/articleEntity';

const ArticleForm: React.FC = () => {
    const [article, setArticle] = useState<Partial<ArticleEntity>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                setLoading(true);
                try {
                    const response = await ArticleService.getArticleById(Number(id));
                    setArticle(response);
                } catch (err : any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchArticle();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (id) {
                await ArticleService.updateArticle(Number(id), article);
            } else {
                await ArticleService.createArticle(article as Omit<ArticleEntity, 'id'>);
            }
            navigate('/articles');
        } catch (err : any) {
            setError(err.message);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setArticle({ ...article, [name]: value });
    };

    if (loading) return <div>Loading article...</div>;

    return (
        <div>
            <h1>{id ? 'Edit Article' : 'Add New Article'}</h1>
            {error && <div>Error: {error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={article.title || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={article.content || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update Article' : 'Create Article'}</button>
            </form>
            <a href="/articles">Cancel</a>
        </div>
    );
};

export default ArticleForm;
