import { useNavigate } from 'react-router-dom'
import autenticaStore from '../../stores/autentica.store'
import Botao from '../Botao'
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'
import styled from 'styled-components'
import CampoDigitacao from '../CampoDigitacao'

const CabecalhoEstilizado = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 4em;
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

const LinkEstilizadoLista = styled(LinkEstilizado)`
	font-weight: 400;
	font-size: 20px;
	text-decoration: none;
`

const ListaEstilizada = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 30px;
	padding: 0;
`

const ItemEstilizado = styled.li`
	list-style-type: none;
`

const BotaoEstilizado = styled(Botao)`
	margin: 0;
`

export default function Cabecalho() {
	const navigate = useNavigate();

	return (
		<CabecalhoEstilizado>
			<img src={logo} alt='Logo Voll' />
			<Container>
				{autenticaStore.estaAutenticado
					?
					<>
						<img src={perfil} alt='Ícone Perfil' />
						<LinkEstilizado href='/' onClick={autenticaStore.logout}>Sair</LinkEstilizado>
					</>
					:
					<ListaEstilizada>
						<ItemEstilizado>
							<LinkEstilizadoLista href='/sobre'>
								Sobre
							</LinkEstilizadoLista>
						</ItemEstilizado>
						<ItemEstilizado>
							<LinkEstilizadoLista href='/cadastro'>
								Cadastre-se
							</LinkEstilizadoLista>
						</ItemEstilizado>
						<ItemEstilizado>
							<CampoDigitacao
								placeholder='Faça sua busca'
								tipo='search'
								valor=''
								onChange={() => { }}
								required={false}
							/>
						</ItemEstilizado>
						<ItemEstilizado>
							<BotaoEstilizado onClick={() => navigate('/login')}>Login</BotaoEstilizado>
						</ItemEstilizado>
					</ListaEstilizada>
				}
			</Container>
		</CabecalhoEstilizado>
	)
}
