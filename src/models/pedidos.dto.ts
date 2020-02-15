import { RefDTO } from "./ref.dto";
import { EntregaDTO } from "./entrega.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { ItemDTO } from "./item.dto";
import { PagamentoDTO } from "./pagamento.dto";

export interface PedidosDTO {
  [x: string]: any;
    usuario: RefDTO;
    enderecoDeEntrega: RefDTO;
    entrega: EntregaDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
    item: ItemDTO[];
}
