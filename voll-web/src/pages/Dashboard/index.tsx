import Avaliacao from "../../components/Avaliacao";
import Botao from "../../components/Botao";
import Container from "../../components/Container";
import Grafico from "../../components/Grafico";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import Titulo from "../../components/Titulo";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";


export default function Dashboard() {
	const { dados: consultas, erro: consultasErro } = useDadosConsulta();
	const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

	if (consultasErro || profissionaisErro) console.log('Ocorreu um erro na requisição.');

	return (
		<Container>
			<Titulo>Área Administrativa</Titulo>
			<Botao>Cadastrar Especialista</Botao>
			<Tabela consultas={consultas} />
			<Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
			<Subtitulo>Dezembro/22</Subtitulo>
			<Grafico profissionais={profissionais} consultas={consultas} />
			<Avaliacao profissionais={profissionais} />
		</Container>
	)
}
