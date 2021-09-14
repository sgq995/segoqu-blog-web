import BaseService from "./base-service";

interface PostContentProp {
  [key: string]: string;
}

interface PostContent {
  tag: string;
  props: PostContentProp;
}

export interface PostModel {
  id: number;
  title: string;
  date: number | Date;
  summary: string;
  category: string;
  tags: string[];
  contents?: PostContent[];
}

class PostsService extends BaseService {
  async getAll(): Promise<PostModel[]> {
    const response = await this.request.get('/posts');
    return response.data.data;
  }

  async read(id: number): Promise<PostModel> {
    const response = await this.request.get(`/posts/${id}`);
    return response.data.data;
  }
}

export default new PostsService();
