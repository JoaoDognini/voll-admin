import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';

interface TituloProps {
	imagem?: string;
	children?: React.ReactNode;
}

interface IImagens {
	avaliacao: string;
	grafico: string;
	consulta: string;
}

const SpanEstilizado = styled.span<TituloProps>`
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 25px;
	height: 25px;
	background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const TituloEstilizado = styled.h2`
	color: var(--azul-claro);
	margin: 0;
`

const ContainerEstilizado = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin: 24px 0 12px 0;
`

export default function Titulo({ imagem, children }: TituloProps) {
	const listaDeImagens: IImagens = {
		avaliacao: avaliacao,
		grafico: grafico,
		consulta: consulta
	}

	return (
		<ContainerEstilizado>
			{imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />}
			<TituloEstilizado>{children}</TituloEstilizado>
		</ContainerEstilizado>
	)
}
