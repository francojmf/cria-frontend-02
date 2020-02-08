import { RefDTO } from "./ref.dto";
import { PedidosDTO } from "./pedidos.dto";

export interface ItemPedidoDTO {
    quantidade: number;
    produto: RefDTO;
}
