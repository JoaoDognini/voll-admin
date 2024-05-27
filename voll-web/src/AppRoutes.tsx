import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PaginaBase from './pages/PaginaBase'
import Home from './pages/Home'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaBase />}>
					<Route path='/' element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
