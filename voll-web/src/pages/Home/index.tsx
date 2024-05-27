import styled from "styled-components";
import Banner from "../../components/Banner";
import Opcoes from "../../components/Opcoes";
import Pesquisa from "../../components/Pesquisa";
import Depoimentos from "../../components/Depoimentos";

const Container = styled.section`
	margin: 40px 120px;
`

export default function Home() {
	return (
		<>
			<Banner />
			<Container>
				<Pesquisa />
				<Opcoes />
				<Depoimentos />
			</Container>
		</>
	)
}
