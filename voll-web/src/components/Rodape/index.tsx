import styled from 'styled-components';
import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';

const RodapeEstilizado = styled.footer`
	height: 100%;
	color: #FFF;
	padding: 1em;
	background-color: var(--azul-escuro);
	text-align: center;
`

const ListaEstilizado = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 10%;
	margin: 1em auto;
	padding: 0;
`

const ItemEstilizado = styled.li`
	list-style-type: none;
`

export default function Rodape() {
	return (
		<RodapeEstilizado>
			<ListaEstilizado>
				<ItemEstilizado>
					<a href='_'>
						<img src={facebook} alt='Logo Facebook' />
					</a>
				</ItemEstilizado>
				<ItemEstilizado>
					<a href='_'>
						<img src={whatsapp} alt='Logo Whatsapp' />
					</a>
				</ItemEstilizado>
				<ItemEstilizado>
					<a href='_'>
						<img src={instagram} alt='Logo Instagram' />
					</a>
				</ItemEstilizado>
				<ItemEstilizado>
					<a href='_'>
						<img src={google} alt='Logo Google' />
					</a>
				</ItemEstilizado>
			</ListaEstilizado>
			<p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
		</RodapeEstilizado>
	)
}
