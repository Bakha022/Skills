import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layouts/AdminLayout'
import PublicLayout from './components/layouts/PublicLayout'
import Dashboard from './pages/Protected/admin/Dashboard'
import Porfolio from './pages/Protected/admin/Porfolio'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<PublicLayout />}>
						<Route index element={<HomePage />} />
						<Route path='login' element={<LoginPage />} />
					</Route>

					<Route element={<AdminLayout />}>
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='portfolio' element={<Porfolio />} />
					</Route>
					
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
