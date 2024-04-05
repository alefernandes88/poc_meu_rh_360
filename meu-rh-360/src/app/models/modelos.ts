export type Usuario = {
    nome_completo: string;
    email: string;
    senha: string;
    confirmacao_senha: string;
    aceite_termo: boolean;
}

export type Empresa = {
    tipo_empresa: string;
    cep: number;                
    endereco: string;           
    bairro: string;             
    cidade: string;             
    complemento: string;        
    cpf: number;                
    nome_empresa: string;       
    cnpj: number;               
    celular: number;            
    nome_administrador: string; 
    email: string;           
}