import { RefDTO } from "./ref.dto";
import { PedidoDTO } from "./pedido.dto";

export interface ItemPedidoDTO {
    quantidade: number;
    produto: RefDTO;
}
