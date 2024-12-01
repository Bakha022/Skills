import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authReducer, { authName } from '../slices/auth'

const rootReducer = {
	[authName]: authReducer,
}

const store = configureStore({ reducer: rootReducer })

const StorePorvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default StorePorvider
