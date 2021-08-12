import BaseService from "./base-service";

export interface Post {
  id: number;
  title: string;
  date: number | Date;
  summary: string;
  content: string;
}

class PostsService extends BaseService {
  async getAll(): Promise<Post[]> {
    const response = await this.request.get('/posts');
    return response.data;
  }

  async read(id: number): Promise<Post> {
    const response = await this.request.get(`/posts/${id}`);
    return response.data;
  }
}

export default new PostsService();
