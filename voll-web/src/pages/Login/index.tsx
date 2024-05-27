import { useState } from 'react'
import CampoDigitacao from '../../components/CampoDigitacao'
import styled from 'styled-components';
import Botao from '../../components/Botao';
import logo from './logo.png';

const Titulo = styled.h1`
	color: var(--cinza);
	font-size: 24px;
`

const Container = styled.div`
	padding: 1rem;
	width: 60%;
	text-align: center;
`

const LinkEstilizado = styled.a`
	color: var(--azul-escuro);
	text-decoration: none;
`

const LinkEstilizadoCadastro = styled(LinkEstilizado)`
	color: var(--azul-claro);
	font-weight: 700;
`

const BotaoEstilizado = styled(Botao)`
	width: 50%;
`

const ParagrafoEstilizado = styled.p`
	font-weight: 400;
	color: var(--cinza);
`

const FormularioEstilizado = styled.form`
	margin-bottom: 1rem;
`

export default function Login() {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	return (
		<Container>
			<Titulo>Faça login em sua conta</Titulo>
			<FormularioEstilizado>
				<CampoDigitacao
					label='Email'
					placeholder='Insira seu endereço de email'
					tipo='text'
					valor={email}
					onChange={setEmail}
					required
				/>
				<CampoDigitacao
					label='Senha'
					placeholder='Insira sua senha'
					tipo='password'
					valor={senha}
					onChange={setSenha}
					required
				/>
				<BotaoEstilizado>Entrar</BotaoEstilizado>
			</FormularioEstilizado>
			<LinkEstilizado href='_'>Esqueceu sua senha?</LinkEstilizado>
			<ParagrafoEstilizado>Ainda não tem conta? <LinkEstilizadoCadastro href='_'>Faça seu cadastro!</LinkEstilizadoCadastro></ParagrafoEstilizado>
		</Container>
	)
}
