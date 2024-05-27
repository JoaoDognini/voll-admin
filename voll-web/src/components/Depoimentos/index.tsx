import styled from "styled-components"
import Titulo from "../Titulo"
import { depoimentos } from "./depoimentos"

const SecaoEstilizada = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10rem;
`

const TituloEstilizado = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--azul-escuro);
`

const ContainerDepoimento = styled.div`
	padding: 0 4rem;
	margin: 16px 0;
`

const ParagrafoEstilizado = styled.p`
	color: #90989F;
	margin: 0;
`

const Subtitulo = styled.h3`
	text-align: center;
	font-weight: 700;
	color: var(--cinza);
	margin: 1rem 0;
`

const Linha = styled.hr`
	opacity: 0.5;
`

export default function Depoimentos() {
	return (
		<SecaoEstilizada>
			<TituloEstilizado>Depoimentos</TituloEstilizado>
			{depoimentos.map(dep =>
				<ContainerDepoimento key={dep.id}>
					<ParagrafoEstilizado>{dep.depoimento}</ParagrafoEstilizado>
					<Subtitulo>{dep.autor}</Subtitulo>
					<Linha />
				</ContainerDepoimento>
			)}
		</SecaoEstilizada>
	)
}
