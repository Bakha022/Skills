import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/auth'

const LoginForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)
	const onFinish = credentials => {
		dispatch(login({ credentials, navigate }))
	}

	return (
		<Form
			onFinish={onFinish}
			name='login'
			className='w-[300px] m-auto p-[20px]'
		>
			<Form.Item
				name={'username'}
				rules={[{ required: true, message: 'Please enter your username!' }]}
			>
				<Input type='text' prefix={<UserOutlined />} placeholder='Username' />
			</Form.Item>
			<Form.Item
				name={'password'}
				rules={[{ required: true, message: 'Please enter your password!' }]}
			>
				<Input
					type='password'
					prefix={<LockOutlined />}
					placeholder='Password'
				/>
			</Form.Item>
			<Form.Item>
				<Button loading={isLoading} type='primary' htmlType='submit' block>
					Log in
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
