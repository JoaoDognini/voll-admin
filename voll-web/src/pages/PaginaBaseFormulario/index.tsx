import styled from 'styled-components';
import imagemFundo from './Imagem.png';
import { Outlet } from 'react-router-dom';
import logo from './logo.png';

const ContainerPrincipal = styled.div`
	background-image: url(${imagemFundo});
	background-color: var(--azul-claro);
	background-size: cover;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Container = styled.div`
	background-color: #FFF;
	width: 50vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Imagem = styled.img`
	padding: 2rem;
`

export default function PaginaBaseFormulario() {
	return (
		<ContainerPrincipal>
			<Container>
				<Imagem src={logo} alt='Logo Voll'></Imagem>
				<Outlet />
			</Container>
		</ContainerPrincipal>
	)
}
