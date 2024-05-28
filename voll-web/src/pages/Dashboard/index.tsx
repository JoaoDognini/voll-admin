import { useState } from "react";
import Avaliacao from "../../components/Avaliacao";
import Botao from "../../components/Botao";
import Container from "../../components/Container";
import Grafico from "../../components/Grafico";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import Titulo from "../../components/Titulo";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";
import ModalCadastro from "./Modal";


export default function Dashboard() {
	const [open, setOpen] = useState(false);
	const { dados: consultas, erro: consultasErro } = useDadosConsulta();
	const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

	if (consultasErro || profissionaisErro) console.log('Ocorreu um erro na requisição.');

	return (
		<Container>
			<Titulo>Área Administrativa</Titulo>
			<Botao onClick={() => setOpen(true)}>Cadastrar Especialista</Botao>
			<ModalCadastro open={open} handleClose={() => setOpen(false)} />
			<Tabela consultas={consultas} />
			<Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
			<Subtitulo>Dezembro/22</Subtitulo>
			<Grafico profissionais={profissionais} consultas={consultas} />
			<Avaliacao profissionais={profissionais} />
		</Container>
	)
}
