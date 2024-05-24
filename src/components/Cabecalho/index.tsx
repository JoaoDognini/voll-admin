import logo from './assets/logo.png'
import perfil from './assets/perfil.png'
import styled from 'styled-components'

const CabecalhoEstilizado = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2em 4em;
`
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-grow: .1;
`

const LinkEstilizado = styled.a`
	color: var(--azul-escuro);
	font-weight: 700;
`

export default function Cabecalho() {
	return (
		<CabecalhoEstilizado>
			<img src={logo} alt='Logo Voll' />
			<Container>
				<img src={perfil} alt='Ícone Perfil' />
				<LinkEstilizado href='$'>Sair</LinkEstilizado>
			</Container>
		</CabecalhoEstilizado>
	)
}
