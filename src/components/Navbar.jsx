import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='container'>
			<div className='flex py-5 justify-between items-center'>
				<Link to={'/'}>
					<img width={50} src='/logo.webp' alt='logo' />
				</Link>

				<ul className='flex gap-2'>
					<li>
						<Link
							className='hover:bg-blue-500 hover:text-white border-sky-500 text-blue-400 border py-1 px-2 rounded transition-all'
							to={'/login'}
						>
							Login
						</Link>
					</li>
					<li>
						<Link
							className='hover:bg-blue-500 hover:text-white border-sky-500 text-blue-400 border py-1 px-2 rounded transition-all'
							to={'/register'}
						>
							Register
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
