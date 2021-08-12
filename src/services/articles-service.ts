import BaseService from "./base-service";

export interface Article {
  id: number;
  title: string;
  date: number | Date;
  summary: string;
}

class ArticlesService extends BaseService {
  async getAll(): Promise<Article[]> {
    const response = await this.request.get('/articles');
    return response.data;
  }

  async read(id: number): Promise<Article> {
    const response = await this.request.get(`/articles/${id}`);
    return response.data;
  }
}

export default new ArticlesService();
