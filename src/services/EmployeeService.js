import BaseService from "./BaseService";


class EmployeeService extends BaseService {
    constructor() {
        super('employees');
    }
  
    async insert(credentials) {
        const response = await this.api.post(`${this.endPoint}`, credentials);
        return response.data;
    }

    async getBy(id) {
        const response = await this.api.get(`${this.endPoint}/${id}`);
        return response.data;
    }
  
    async list() {
        const response = await this.api.get(this.endPoint);
        return response.data;
    }
  
    async update(credentials) {
        const response = await this.api.put(`${this.endPoint}`, credentials);
        return response.data;
    }
  
    async delete(id) {
        const response = await this.api.delete(`${this.endPoint}/${id}`);
        return response.data;
    }
}

export default EmployeeService;