import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsulta from "../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		color: "var(--azul-escuro)",
		fontSize: 18,
		fontWeight: 700,
		fontFamily: "var(--fonte-principal)"
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 16,
		fontFamily: "var(--fonte-principal)"
	}
}))

const LinhaEstilizada = styled(TableRow)(() => ({
	[`&:nth-of-type(odd)`]: {
		backgroundColor: "var(--cinza-claro)",
		align: "right"
	}
}))

export default function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
					<TableHead>
						<TableRow>
							<CelulaEstilizada>Data</CelulaEstilizada>
							<CelulaEstilizada>Horário</CelulaEstilizada>
							<CelulaEstilizada>Profissional</CelulaEstilizada>
							<CelulaEstilizada>Especialidade</CelulaEstilizada>
							<CelulaEstilizada>Paciente</CelulaEstilizada>
							<CelulaEstilizada>Modalidade</CelulaEstilizada>
						</TableRow>
					</TableHead>
					<TableBody>
						{consultas?.map(consulta => {
							return (
								<LinhaEstilizada>
									<CelulaEstilizada component="th" scope="row">{new Date(consulta.data).toLocaleDateString()}</CelulaEstilizada>
									<CelulaEstilizada component="th" scope="row">{consulta.horario}</CelulaEstilizada>
									<CelulaEstilizada>{consulta.profissional[0].nome}</CelulaEstilizada>
									<CelulaEstilizada>{consulta.profissional[0].especialidade}</CelulaEstilizada>
									<CelulaEstilizada>{consulta.paciente}</CelulaEstilizada>
									<CelulaEstilizada>{consulta.modalidade}</CelulaEstilizada>
								</LinhaEstilizada>
							)
						})}

					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
