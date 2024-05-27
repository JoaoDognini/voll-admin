import styled from "styled-components"
import Botao from "../Botao"
import search from './search.png'
import location from './location_on.png'

const SecaoEstilizada = styled.section`
	padding: 1rem 2rem;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	text-align: center;
`

/** SEÇÃO INPUT */
const ListaEstilizada = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0;
`

const ItemEstilizado = styled.li`
	list-style-type: none;
`

const ItemInformacoesEstilizado = styled(ItemEstilizado)`
	flex-grow: 1;
`

const Container = styled.div`
	display: flex;
	text-align: center;
	height: 35px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
`

const SpanEstilizado = styled.span`
	background-image: url(${search});
	background-repeat: no-repeat;
	width: 35px;
	background-color: #EDEDED;
	background-position: center;
	border-radius: 8px 0 0 8px;
`

const InputEstilizado = styled.input`
	border: none;
	border-radius: 0 8px 8px 0;
    flex-grow: 1;
`
/** SEÇÃO INPUT */

const SubtituloEstilizado = styled.h3`
	color: var(--cinza);
	font-weight: 700;
`

const ListaEspecialidade = styled.ul`
	padding: 0 10rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 8px;
`

const ItemEspEstilizado = styled.li`
	list-style-type: none;
	background-color: #EDEDED;
	border-radius: 4px;
	color: var(--cinza);
	padding: 0.3rem;
`

export default function Pesquisa() {
	return (
		<SecaoEstilizada>
			<ListaEstilizada>
				<ItemInformacoesEstilizado>
					<Container>
						<SpanEstilizado />
						<InputEstilizado placeholder="Digite a especialidade" />
					</Container>
				</ItemInformacoesEstilizado>
				<ItemInformacoesEstilizado>
					<Container>
						<SpanEstilizado />
						<InputEstilizado placeholder="Digite sua localização" />
					</Container>
				</ItemInformacoesEstilizado>
				<ItemEstilizado>
					<Botao>Buscar</Botao>
				</ItemEstilizado>
			</ListaEstilizada>

			<SubtituloEstilizado>Você pode estar procurando por estas categorias:</SubtituloEstilizado>
			<ListaEspecialidade>
				<ItemEspEstilizado>Neurologista</ItemEspEstilizado>
				<ItemEspEstilizado>Dermatologista</ItemEspEstilizado>
				<ItemEspEstilizado>Cardiologista</ItemEspEstilizado>
				<ItemEspEstilizado>Ortopedista</ItemEspEstilizado>
				<ItemEspEstilizado>Oftalmologista</ItemEspEstilizado>
				<ItemEspEstilizado>Pediatria</ItemEspEstilizado>
				<ItemEspEstilizado>Reumatologista</ItemEspEstilizado>
			</ListaEspecialidade>
		</SecaoEstilizada>
	)
}
