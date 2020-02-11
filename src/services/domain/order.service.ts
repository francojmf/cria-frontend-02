import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ItemDTO } from "../../models/item.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { ImageUtilService } from "../image-util.service";

@Injectable()
export class OrderService {

    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public imageUtilService: ImageUtilService) {
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/pedidos${id}`);
    }

    findAll() : Observable<ItemDTO[]>  {
      return this.http.get<ItemDTO[]>(`${API_CONFIG.baseUrl}/pedidos`);
  }

    insert(obj : ItemDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/produtos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

}
