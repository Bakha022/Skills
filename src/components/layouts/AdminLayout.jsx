import React, { useState } from 'react'

import {
	DashboardOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const { Header, Sider, Content } = Layout

import { MdOutlineLogout } from 'react-icons/md'

import { SiBookstack } from 'react-icons/si'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/auth'

const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()

	const dispatch = useDispatch()

	const navigate = useNavigate()

	return (
		<Layout className='w-full h-screen'>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='demo-logo-vertical' />
				<Link
					to={'/dashboard'}
					className={`text-white text-2xl ${
						collapsed ? '' : 'ms-3'
					} mt-3 px-[5px] flex items-center`}
				>
					<img
						className={collapsed ? 'mx-auto' : ''}
						width={35}
						src='/admin.png'
						alt=''
					/>
					{collapsed ? '' : 'LMS'}
				</Link>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <DashboardOutlined />,
							label: <Link to={'/dashboard'}>Dashboard</Link>,
						},
						{
							key: '2',
							icon: <SiBookstack />,
							label: <Link to={'/portfolio'}>Portfolio</Link>,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<div className='flex justify-between items-center'>
						<Button
							type='text'
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>

						<Button
							danger
							onClick={() => dispatch(logout(navigate))}
							className='me-[15px] flex justify-between items-center'
						>
							Log Out <MdOutlineLogout />
						</Button>
					</div>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default AdminLayout
