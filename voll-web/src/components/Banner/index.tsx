import styled from 'styled-components';
import foto from './Imagem.png';

const ContainerEstilizada = styled.div`
	display: flex;
	background-color: var(--azul-claro);	
	height: 400px;
	width: 100%;
	background-image: url(${foto});
	background-repeat: no-repeat;
	background-size: cover;
`

const ParagrafoEstilizado = styled.p`
	font-size: 32px;
	font-weight: 700;
	color: #FFF;
	height: 120px;
	max-width: 588px;
	margin: auto 0;
	margin-left: 120px;
`

export default function Banner() {
	return (
		<ContainerEstilizada >
			<ParagrafoEstilizado>Encontre profissionais de diversas especialidades e agende sua consulta com facilidade!</ParagrafoEstilizado>
		</ContainerEstilizada>
	)
}