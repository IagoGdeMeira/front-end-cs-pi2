import api from "../config/axiosConfig";


class BaseService {
    constructor(endPoint) {
        this.api = api;
        this.endPoint = endPoint;
    }
  
    insert = async (data) => await this.api.post(this.endPoint, data).data;
  
    update = async (data) => await this.api.put(this.endPoint, data).data;
    
    delete = async (id) => await this.api.delete(`${this.endPoint}/${id}`).data;
  
    list = async () => await this.api.get(this.endPoint).data;
}

export default BaseService;