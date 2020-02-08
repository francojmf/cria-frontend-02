import { RefDTO } from "./ref.dto";
import { PedidoDTO } from "./pedido.dto";

export interface ItemDTO {
//    produto: RefDTO;
//    pedido: PedidoDTO;
    nome: string;
    med_a: number;
    med_b: number;
    med_c: number;
    med_d: number;
    med_e: number;
    med_f: number;
    descricao: string;
}
