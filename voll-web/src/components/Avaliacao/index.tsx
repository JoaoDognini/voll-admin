import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import Card from "./Card"
import Titulo from "../Titulo"
import Subtitulo from "../Subtitulo"
import Botao from "../Botao"

const SecaoCard = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	width: 100%;
`

export default function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
	return (
		<>
			<Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
			<Subtitulo>Dezembro/22</Subtitulo>
			<SecaoCard>
				{profissionais && profissionais.length
					? profissionais?.map(profissional => <Card profissional={profissional} />)
					: 'Não há avaliações'
				}
			</SecaoCard>
			{profissionais && profissionais.length > 4
				? <Botao>Ver mais</Botao>
				: ''
			}
		</>
	)
}
