import { CidadeDTO } from "./cidade.dto";

export interface EnderecosDTO {
    id : string;
    logradouro : string;
    numero : string;
    complemento : string;
    bairro : string;
    cep : string;
    cidade : CidadeDTO;
}
