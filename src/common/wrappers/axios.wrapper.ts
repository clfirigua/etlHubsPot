import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';

export class AxiosWrapper {
  protected readonly client: AxiosInstance;

  constructor(baseURL: string, token:string) {

    this.client = axios.create({
      baseURL,
      headers: this.createHeders(token)
    });
  }


  private createHeders = (token?:string) =>{
    const headers = { 'Content-Type': 'application/json'}
    if(token){ headers["Authorization"] = `Bearer ${token}`}
    return headers
  }



  async get<T = any>(url: string): Promise<T> {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async post<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  async put<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  async patch<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }

  async delete<T = any>(url: string,): Promise<T> {
    const response = await this.client.delete<T>(url);
    return response.data;
  }
}

