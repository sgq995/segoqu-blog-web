import BaseService from "./base-service";

class ArticlesService extends BaseService {
  async getAll() {
    return await this.request.get('/articles');
  }

  async read(id: number) {
    return await this.request.get(`/articles/${id}`);
  }
}

export default new ArticlesService();
