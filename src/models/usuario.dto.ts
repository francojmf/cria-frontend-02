import { EnderecosDTO } from "./enderecos.dto";

export interface UsuarioDTO {
    id : string;
    nome : string;
    email : string;
    enderecos : EnderecosDTO;
    imageUrl? : string;
}
