// src/views/page/article/ArticleList.tsx
import React, { useEffect, useState } from 'react';
import { ArticleService } from '../../../data/service/ArticleService';
import { ArticleEntity } from '../../../data/entity/articleEntity';

const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<ArticleEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await ArticleService.getAllArticles();
                setArticles(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await ArticleService.deleteArticle(id);
            setArticles(articles.filter(article => article.id !== id));
        } catch (err : any) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading articles...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Article List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>
                                <button onClick={() => handleDelete(article.id ?? 0)}>Delete</button>
                                <a href={`/articles/edit/${article.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/articles/new">Add New Article</a>
        </div>
    );
};

export default ArticleList;
