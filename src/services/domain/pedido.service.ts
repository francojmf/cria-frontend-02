import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PedidosDTO } from "../../models/pedidos.dto";
import { UsuarioDTO } from "../../models/usuario.dto";

@Injectable()
export class PedidoService {

  id : UsuarioDTO["id"];

  getPedidos() {
    return this.http.get(`${API_CONFIG.baseUrl}/pedidos/${this.id}`);
}

  findOrderById(id: string) {
  return this.http.get(`${API_CONFIG.baseUrl}/pedidos/${id}`);
}
    constructor(public http: HttpClient) {
    }

    insert(obj: PedidosDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
