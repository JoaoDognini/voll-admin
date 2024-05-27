import styled from "styled-components"
import calendario from './assets/calendar.png'
import health from './assets/health.png'
import notificacao from './assets/notifications.png'
import thumb from './assets/thumb.png'

const ListaEstilizada = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0;
	width: 100%;
	text-align: center;
`

const ItemEstilizado = styled.li`
	list-style-type: none;
	background-color: var(--cinza-claro);
	border-radius: 8px;
	padding: 1rem 0.5rem;
	width: 20%;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);

	h4 {
		margin-bottom: 0;
		margin-top: 12px;
		font-weight: 400;
		color: var(--azul-escuro);
	}
`

export default function Opcoes() {
	return (
		<ListaEstilizada>
			<ItemEstilizado>
				<img src={health} alt='' />
				<h4>Encontre especialistas</h4>
			</ItemEstilizado>
			<ItemEstilizado>
				<img src={calendario} alt='' />
				<h4>Agende consultas</h4>
			</ItemEstilizado>
			<ItemEstilizado>
				<img src={notificacao} alt='' />
				<h4>Defina lembretes</h4>
			</ItemEstilizado>
			<ItemEstilizado>
				<img src={thumb} alt='' />
				<h4>Avalie o serviço</h4>
			</ItemEstilizado>
		</ListaEstilizada>
	)
}
