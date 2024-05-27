import IEndereco from "./IEndereco"

export default interface IClinica {
	nome: string
	email: string
	senha: string
	endereco: IEndereco
}