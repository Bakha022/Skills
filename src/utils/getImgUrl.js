import { UPLOAD_URL } from './constants'

const getImgUrl = obj =>
	obj ? UPLOAD_URL + obj._id + '.' + obj.name.split('.')[1] : ''

export default getImgUrl