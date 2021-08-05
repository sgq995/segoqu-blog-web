import BaseService from "./base-service";

class PostsService extends BaseService {
  async getAll() {
    return await this.request.get('/posts');
  }

  async read(id: number) {
    return await this.request.get(`/posts/${id}`);
  }
}

export default new PostsService();
