import axios, { AxiosInstance } from "axios";
import config from "../config";

class BaseService {
  baseURL: string;
  request: AxiosInstance;

  constructor() {
    this.baseURL = config.api.baseURL ?? '';
    this.request = axios.create({
      baseURL: this.baseURL
    });
  }
}

export default BaseService;
