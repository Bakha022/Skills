import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layouts/AdminLayout'
import PublicLayout from './components/layouts/PublicLayout'
import Dashboard from './pages/Protected/admin/Dashboard'
import Porfolio from './pages/Protected/admin/Porfolio'
import HomePage from './pages/public/HomePage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

const App = () => {
	const { user } = useSelector(state => state.auth)

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<PublicLayout />}>
						<Route index element={<HomePage />} />
						<Route path='register' element={<RegisterPage />} />
						<Route path='login' element={<LoginPage />} />
					</Route>

					<Route
						element={user == 'admin' ? <AdminLayout /> : <Navigate to={'/'} />}
					>
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='portfolio' element={<Porfolio />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
