import { RefDTO } from "./ref.dto";
import { EntregaDTO } from "./entrega.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    entrega: EntregaDTO;
    itens: ItemPedidoDTO[];
}
