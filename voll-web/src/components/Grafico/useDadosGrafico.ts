import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

interface IDados {
	nome: string,
	consultas: number
}

interface Props {
	profissionais: IProfissional[] | null
	consultas: IConsulta[] | null
}
const useDadosGrafico = ({ profissionais, consultas }: Props) => {
	let dados: IDados[] = [];

	if (profissionais && profissionais.length && consultas) {
		dados = profissionais.map(profissional => (
			{
				nome: profissional.nome,
				consultas: consultas.filter(consulta => consulta.profissional.some(prof => prof.nome === profissional.nome)).length
			}
		))
	}

	return dados;
}

export default useDadosGrafico;