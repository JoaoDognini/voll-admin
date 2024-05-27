import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PaginaBase from './pages/PaginaBase'
import Home from './pages/Home'
import PaginaBaseFormulario from './pages/PaginaBaseFormulario'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaBase />}>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />

				</Route>
				<Route path='/' element={<PaginaBaseFormulario />}>
					<Route path='/login' element={<Login />} />
					<Route path='/cadastro' element={<Cadastro />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
